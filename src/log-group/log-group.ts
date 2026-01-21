import { RemovalPolicy } from 'aws-cdk-lib';
import { LogGroup, LogGroupProps, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export class MultiTenantLogGroup extends LogGroup {
  constructor(scope: Construct, id: string, props?: LogGroupProps) {
    super(scope, id, {
      retention: RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
      ...props,
    });
  }
}