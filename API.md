# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultiTenantPreTokenGeneration <a name="MultiTenantPreTokenGeneration" id="cdk-multi-tenant.MultiTenantPreTokenGeneration"></a>

#### Initializers <a name="Initializers" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer"></a>

```typescript
import { MultiTenantPreTokenGeneration } from 'cdk-multi-tenant'

new MultiTenantPreTokenGeneration(scope: Construct, id: string, props: MultiTenantPreTokenGenerationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGenerationProps">MultiTenantPreTokenGenerationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-multi-tenant.MultiTenantPreTokenGenerationProps">MultiTenantPreTokenGenerationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.isConstruct"></a>

```typescript
import { MultiTenantPreTokenGeneration } from 'cdk-multi-tenant'

MultiTenantPreTokenGeneration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGeneration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-multi-tenant.MultiTenantPreTokenGeneration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### MultiTenantUserPool <a name="MultiTenantUserPool" id="cdk-multi-tenant.MultiTenantUserPool"></a>

#### Initializers <a name="Initializers" id="cdk-multi-tenant.MultiTenantUserPool.Initializer"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

new MultiTenantUserPool(scope: Construct, id: string, props?: IUserPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-multi-tenant.IUserPoolProps">IUserPoolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-multi-tenant.IUserPoolProps">IUserPoolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.addClient">addClient</a></code> | Add a new app client to this user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.addDomain">addDomain</a></code> | Associate a domain to this user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.addGroup">addGroup</a></code> | Add a new group to this user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.addResourceServer">addResourceServer</a></code> | Add a new resource server to this user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.addTrigger">addTrigger</a></code> | Add a lambda trigger to a user pool operation. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.grant">grant</a></code> | [disable-awslint:no-grants]. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.registerIdentityProvider">registerIdentityProvider</a></code> | Register an identity provider with this user pool. |

---

##### `toString` <a name="toString" id="cdk-multi-tenant.MultiTenantUserPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-multi-tenant.MultiTenantUserPool.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-multi-tenant.MultiTenantUserPool.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClient` <a name="addClient" id="cdk-multi-tenant.MultiTenantUserPool.addClient"></a>

```typescript
public addClient(id: string, options?: UserPoolClientOptions): UserPoolClient
```

Add a new app client to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.addClient.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-multi-tenant.MultiTenantUserPool.addClient.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolClientOptions

---

##### `addDomain` <a name="addDomain" id="cdk-multi-tenant.MultiTenantUserPool.addDomain"></a>

```typescript
public addDomain(id: string, options: UserPoolDomainOptions): UserPoolDomain
```

Associate a domain to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.addDomain.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-multi-tenant.MultiTenantUserPool.addDomain.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolDomainOptions

---

##### `addGroup` <a name="addGroup" id="cdk-multi-tenant.MultiTenantUserPool.addGroup"></a>

```typescript
public addGroup(id: string, options: UserPoolGroupOptions): UserPoolGroup
```

Add a new group to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.addGroup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-multi-tenant.MultiTenantUserPool.addGroup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolGroupOptions

---

##### `addResourceServer` <a name="addResourceServer" id="cdk-multi-tenant.MultiTenantUserPool.addResourceServer"></a>

```typescript
public addResourceServer(id: string, options: UserPoolResourceServerOptions): UserPoolResourceServer
```

Add a new resource server to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.addResourceServer.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-multi-tenant.MultiTenantUserPool.addResourceServer.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolResourceServerOptions

---

##### `addTrigger` <a name="addTrigger" id="cdk-multi-tenant.MultiTenantUserPool.addTrigger"></a>

```typescript
public addTrigger(operation: UserPoolOperation, fn: IFunction, lambdaVersion?: LambdaVersion): void
```

Add a lambda trigger to a user pool operation.

> [https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html)

###### `operation`<sup>Required</sup> <a name="operation" id="cdk-multi-tenant.MultiTenantUserPool.addTrigger.parameter.operation"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolOperation

---

###### `fn`<sup>Required</sup> <a name="fn" id="cdk-multi-tenant.MultiTenantUserPool.addTrigger.parameter.fn"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

###### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="cdk-multi-tenant.MultiTenantUserPool.addTrigger.parameter.lambdaVersion"></a>

- *Type:* aws-cdk-lib.aws_cognito.LambdaVersion

---

##### `grant` <a name="grant" id="cdk-multi-tenant.MultiTenantUserPool.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

[disable-awslint:no-grants].

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-multi-tenant.MultiTenantUserPool.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-multi-tenant.MultiTenantUserPool.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `registerIdentityProvider` <a name="registerIdentityProvider" id="cdk-multi-tenant.MultiTenantUserPool.registerIdentityProvider"></a>

```typescript
public registerIdentityProvider(provider: IUserPoolIdentityProviderRef): void
```

Register an identity provider with this user pool.

###### `provider`<sup>Required</sup> <a name="provider" id="cdk-multi-tenant.MultiTenantUserPool.registerIdentityProvider.parameter.provider"></a>

- *Type:* aws-cdk-lib.interfaces.aws_cognito.IUserPoolIdentityProviderRef

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.fromUserPoolArn">fromUserPoolArn</a></code> | Import an existing user pool based on its ARN. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.fromUserPoolId">fromUserPoolId</a></code> | Import an existing user pool based on its id. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-multi-tenant.MultiTenantUserPool.isConstruct"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

MultiTenantUserPool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-multi-tenant.MultiTenantUserPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-multi-tenant.MultiTenantUserPool.isOwnedResource"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

MultiTenantUserPool.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-multi-tenant.MultiTenantUserPool.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-multi-tenant.MultiTenantUserPool.isResource"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

MultiTenantUserPool.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-multi-tenant.MultiTenantUserPool.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromUserPoolArn` <a name="fromUserPoolArn" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolArn"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

MultiTenantUserPool.fromUserPoolArn(scope: Construct, id: string, userPoolArn: string)
```

Import an existing user pool based on its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolArn.parameter.id"></a>

- *Type:* string

---

###### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolArn.parameter.userPoolArn"></a>

- *Type:* string

---

##### `fromUserPoolId` <a name="fromUserPoolId" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolId"></a>

```typescript
import { MultiTenantUserPool } from 'cdk-multi-tenant'

MultiTenantUserPool.fromUserPoolId(scope: Construct, id: string, userPoolId: string)
```

Import an existing user pool based on its id.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolId.parameter.id"></a>

- *Type:* string

---

###### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="cdk-multi-tenant.MultiTenantUserPool.fromUserPoolId.parameter.userPoolId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.identityProviders">identityProviders</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPoolIdentityProvider[]</code> | Get all identity providers registered with this user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | The ARN of the user pool. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolId">userPoolId</a></code> | <code>string</code> | The physical ID of this user pool resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolProviderName">userPoolProviderName</a></code> | <code>string</code> | User pool provider name. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolProviderUrl">userPoolProviderUrl</a></code> | <code>string</code> | User pool provider URL. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolRef">userPoolRef</a></code> | <code>aws-cdk-lib.interfaces.aws_cognito.UserPoolReference</code> | A reference to a UserPool resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.userPoolClient">userPoolClient</a></code> | <code>aws-cdk-lib.aws_cognito.UserPoolClient</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-multi-tenant.MultiTenantUserPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-multi-tenant.MultiTenantUserPool.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-multi-tenant.MultiTenantUserPool.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="cdk-multi-tenant.MultiTenantUserPool.property.identityProviders"></a>

```typescript
public readonly identityProviders: IUserPoolIdentityProvider[];
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolIdentityProvider[]

Get all identity providers registered with this user pool.

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

The ARN of the user pool.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The physical ID of this user pool resource.

---

##### `userPoolProviderName`<sup>Required</sup> <a name="userPoolProviderName" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolProviderName"></a>

```typescript
public readonly userPoolProviderName: string;
```

- *Type:* string

User pool provider name.

---

##### `userPoolProviderUrl`<sup>Required</sup> <a name="userPoolProviderUrl" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolProviderUrl"></a>

```typescript
public readonly userPoolProviderUrl: string;
```

- *Type:* string

User pool provider URL.

---

##### `userPoolRef`<sup>Required</sup> <a name="userPoolRef" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolRef"></a>

```typescript
public readonly userPoolRef: UserPoolReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_cognito.UserPoolReference

A reference to a UserPool resource.

---

##### `userPoolClient`<sup>Required</sup> <a name="userPoolClient" id="cdk-multi-tenant.MultiTenantUserPool.property.userPoolClient"></a>

```typescript
public readonly userPoolClient: UserPoolClient;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPoolClient

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="cdk-multi-tenant.MultiTenantUserPool.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### MultiTenantPreTokenGenerationProps <a name="MultiTenantPreTokenGenerationProps" id="cdk-multi-tenant.MultiTenantPreTokenGenerationProps"></a>

#### Initializer <a name="Initializer" id="cdk-multi-tenant.MultiTenantPreTokenGenerationProps.Initializer"></a>

```typescript
import { MultiTenantPreTokenGenerationProps } from 'cdk-multi-tenant'

const multiTenantPreTokenGenerationProps: MultiTenantPreTokenGenerationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGenerationProps.property.domainPrefix">domainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantPreTokenGenerationProps.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.UserPool</code> | *No description.* |

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="cdk-multi-tenant.MultiTenantPreTokenGenerationProps.property.domainPrefix"></a>

```typescript
public readonly domainPrefix: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="cdk-multi-tenant.MultiTenantPreTokenGenerationProps.property.userPool"></a>

```typescript
public readonly userPool: UserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPool

---

## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="cdk-multi-tenant.Hello"></a>

#### Initializers <a name="Initializers" id="cdk-multi-tenant.Hello.Initializer"></a>

```typescript
import { Hello } from 'cdk-multi-tenant'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="cdk-multi-tenant.Hello.sayHello"></a>

```typescript
public sayHello(): string
```




## Protocols <a name="Protocols" id="Protocols"></a>

### IUserPoolProps <a name="IUserPoolProps" id="cdk-multi-tenant.IUserPoolProps"></a>

- *Implemented By:* <a href="#cdk-multi-tenant.IUserPoolProps">IUserPoolProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.IUserPoolProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-multi-tenant.IUserPoolProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

