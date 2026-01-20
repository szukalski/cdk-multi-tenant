import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { ClientAttributes, FeaturePlan, LambdaVersion, StringAttribute, UserPool, UserPoolClient, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export interface IUserPoolProps {
  name: string;
}

export class MultiTenantUserPool extends UserPool {
  public readonly userPoolClient: UserPoolClient;
  constructor(scope: Construct, id: string, props?: IUserPoolProps) {
    super(scope, id, {
      featurePlan: FeaturePlan.ESSENTIALS,
      selfSignUpEnabled: false,
      signInAliases: {
        username: true,
        email: true,
        phone: false,
      },
      standardAttributes: {
        email: { required: false, mutable: true },
        phoneNumber: { required: false, mutable: true },
      },
      customAttributes: {
        tenantId: new StringAttribute({ minLen: 1, maxLen: 36, mutable: false }), // Don't let anyone change the tenantId after creation!
        role: new StringAttribute({ minLen: 1, maxLen: 36, mutable: true }),
      },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props,
    });
    this.userPoolClient = this.addClient('UserPoolClient', {
      authFlows: { userPassword: true },
      readAttributes: new ClientAttributes()
        .withCustomAttributes(...['tenantId', 'role']),
      writeAttributes: new ClientAttributes()
        .withCustomAttributes(...['tenantId', 'role']),
      accessTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(60),
      refreshTokenValidity: Duration.days(30),
    });
  }
}

export interface MultiTenantPreTokenGenerationProps {
  readonly domainPrefix: string;
  readonly userPool: UserPool;
}

export class MultiTenantPreTokenGeneration extends Construct {
  constructor(scope: Construct, id: string, props: MultiTenantPreTokenGenerationProps) {
    super(scope, id);
    const { domainPrefix, userPool } = props;
    userPool.addDomain(domainPrefix, {
      cognitoDomain: {
        domainPrefix: domainPrefix,
      },
    });
    const preTokenGenerationFn = new NodejsFunction(this, 'PreTokenGenerationFn', {
      code: Code.fromInline(`
export const handler = function(event: any, context: any) {
  const userAttributes = event.request.userAttributes;
  event.response = {
    claimsAndScopeOverrideDetails: {
      idTokenGeneration: {
        claimsToAddOrOverride: {
          'https://aws.amazon.com/tags': {
            principal_tags: {
              tenantId: [userAttributes['custom:tenantId']],
              role: [userAttributes['custom:role']],
            },
          },
        },
      },
    },
  };
  context.done(null, event);
};
      `),
      runtime: Runtime.NODEJS_LATEST,
      handler: 'handler',
      timeout: Duration.seconds(30),
    });
    userPool.addTrigger(UserPoolOperation.PRE_TOKEN_GENERATION_CONFIG, preTokenGenerationFn, LambdaVersion.V2_0);
  }
}