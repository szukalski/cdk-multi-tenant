# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultiTenantLogGroup <a name="MultiTenantLogGroup" id="cdk-multi-tenant.MultiTenantLogGroup"></a>

#### Initializers <a name="Initializers" id="cdk-multi-tenant.MultiTenantLogGroup.Initializer"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

new MultiTenantLogGroup(scope: Construct, id: string, props?: LogGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_logs.LogGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.LogGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.addMetricFilter">addMetricFilter</a></code> | Create a new Metric Filter on this Log Group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.addStream">addStream</a></code> | Create a new Log Stream for this Log Group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.addSubscriptionFilter">addSubscriptionFilter</a></code> | Create a new Subscription Filter on this Log Group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.addTransformer">addTransformer</a></code> | Create a new Transformer on this Log Group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.extractMetric">extractMetric</a></code> | Extract a metric from structured log events in the LogGroup. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.grant">grant</a></code> | Give the indicated permissions on this log group and all streams. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.grantRead">grantRead</a></code> | Give permissions to read and filter events from this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.grantWrite">grantWrite</a></code> | Give permissions to create and write to streams in this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.logGroupPhysicalName">logGroupPhysicalName</a></code> | Public method to get the physical name of this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.metric">metric</a></code> | Creates a CloudWatch metric for this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.metricIncomingBytes">metricIncomingBytes</a></code> | Creates a CloudWatch metric for the volume of incoming log data in bytes to this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.metricIncomingLogEvents">metricIncomingLogEvents</a></code> | Creates a CloudWatch metric for the number of incoming log events to this log group. |

---

##### `toString` <a name="toString" id="cdk-multi-tenant.MultiTenantLogGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-multi-tenant.MultiTenantLogGroup.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-multi-tenant.MultiTenantLogGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addMetricFilter` <a name="addMetricFilter" id="cdk-multi-tenant.MultiTenantLogGroup.addMetricFilter"></a>

```typescript
public addMetricFilter(id: string, props: MetricFilterOptions): MetricFilter
```

Create a new Metric Filter on this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.addMetricFilter.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.addMetricFilter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.MetricFilterOptions

Properties for creating the MetricFilter.

---

##### `addStream` <a name="addStream" id="cdk-multi-tenant.MultiTenantLogGroup.addStream"></a>

```typescript
public addStream(id: string, props?: StreamOptions): LogStream
```

Create a new Log Stream for this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.addStream.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.addStream.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.StreamOptions

Properties for creating the LogStream.

---

##### `addSubscriptionFilter` <a name="addSubscriptionFilter" id="cdk-multi-tenant.MultiTenantLogGroup.addSubscriptionFilter"></a>

```typescript
public addSubscriptionFilter(id: string, props: SubscriptionFilterOptions): SubscriptionFilter
```

Create a new Subscription Filter on this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.addSubscriptionFilter.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.addSubscriptionFilter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.SubscriptionFilterOptions

Properties for creating the SubscriptionFilter.

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="cdk-multi-tenant.MultiTenantLogGroup.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy associated with this log group.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Any ARN Principals inside of the statement will be converted into AWS Account ID strings
because CloudWatch Logs Resource Policies do not accept ARN principals.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-multi-tenant.MultiTenantLogGroup.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The policy statement to add.

---

##### `addTransformer` <a name="addTransformer" id="cdk-multi-tenant.MultiTenantLogGroup.addTransformer"></a>

```typescript
public addTransformer(id: string, props: TransformerOptions): Transformer
```

Create a new Transformer on this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.addTransformer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.addTransformer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.TransformerOptions

Properties for creating the Transformer.

---

##### `extractMetric` <a name="extractMetric" id="cdk-multi-tenant.MultiTenantLogGroup.extractMetric"></a>

```typescript
public extractMetric(jsonField: string, metricNamespace: string, metricName: string): Metric
```

Extract a metric from structured log events in the LogGroup.

Creates a MetricFilter on this LogGroup that will extract the value
of the indicated JSON field in all records where it occurs.

The metric will be available in CloudWatch Metrics under the
indicated namespace and name.

###### `jsonField`<sup>Required</sup> <a name="jsonField" id="cdk-multi-tenant.MultiTenantLogGroup.extractMetric.parameter.jsonField"></a>

- *Type:* string

JSON field to extract (example: '$.myfield').

---

###### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="cdk-multi-tenant.MultiTenantLogGroup.extractMetric.parameter.metricNamespace"></a>

- *Type:* string

Namespace to emit the metric under.

---

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-multi-tenant.MultiTenantLogGroup.extractMetric.parameter.metricName"></a>

- *Type:* string

Name to emit the metric under.

---

##### `grant` <a name="grant" id="cdk-multi-tenant.MultiTenantLogGroup.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Give the indicated permissions on this log group and all streams.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-multi-tenant.MultiTenantLogGroup.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-multi-tenant.MultiTenantLogGroup.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantRead` <a name="grantRead" id="cdk-multi-tenant.MultiTenantLogGroup.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Give permissions to read and filter events from this log group.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-multi-tenant.MultiTenantLogGroup.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="cdk-multi-tenant.MultiTenantLogGroup.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Give permissions to create and write to streams in this log group.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-multi-tenant.MultiTenantLogGroup.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `logGroupPhysicalName` <a name="logGroupPhysicalName" id="cdk-multi-tenant.MultiTenantLogGroup.logGroupPhysicalName"></a>

```typescript
public logGroupPhysicalName(): string
```

Public method to get the physical name of this log group.

##### `metric` <a name="metric" id="cdk-multi-tenant.MultiTenantLogGroup.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Creates a CloudWatch metric for this log group.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-multi-tenant.MultiTenantLogGroup.metric.parameter.metricName"></a>

- *Type:* string

The name of the metric to create.

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Additional properties to configure the metric.

---

##### `metricIncomingBytes` <a name="metricIncomingBytes" id="cdk-multi-tenant.MultiTenantLogGroup.metricIncomingBytes"></a>

```typescript
public metricIncomingBytes(props?: MetricOptions): Metric
```

Creates a CloudWatch metric for the volume of incoming log data in bytes to this log group.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.metricIncomingBytes.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Configuration options for the metric.

---

##### `metricIncomingLogEvents` <a name="metricIncomingLogEvents" id="cdk-multi-tenant.MultiTenantLogGroup.metricIncomingLogEvents"></a>

```typescript
public metricIncomingLogEvents(props?: MetricOptions): Metric
```

Creates a CloudWatch metric for the number of incoming log events to this log group.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantLogGroup.metricIncomingLogEvents.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Configuration options for the metric.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupArn">fromLogGroupArn</a></code> | Import an existing LogGroup given its ARN. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupName">fromLogGroupName</a></code> | Import an existing LogGroup given its name. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-multi-tenant.MultiTenantLogGroup.isConstruct"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

MultiTenantLogGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-multi-tenant.MultiTenantLogGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-multi-tenant.MultiTenantLogGroup.isOwnedResource"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

MultiTenantLogGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-multi-tenant.MultiTenantLogGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-multi-tenant.MultiTenantLogGroup.isResource"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

MultiTenantLogGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-multi-tenant.MultiTenantLogGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLogGroupArn` <a name="fromLogGroupArn" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupArn"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

MultiTenantLogGroup.fromLogGroupArn(scope: Construct, id: string, logGroupArn: string)
```

Import an existing LogGroup given its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupArn.parameter.id"></a>

- *Type:* string

---

###### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupArn.parameter.logGroupArn"></a>

- *Type:* string

---

##### `fromLogGroupName` <a name="fromLogGroupName" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupName"></a>

```typescript
import { MultiTenantLogGroup } from 'cdk-multi-tenant'

MultiTenantLogGroup.fromLogGroupName(scope: Construct, id: string, logGroupName: string)
```

Import an existing LogGroup given its name.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupName.parameter.id"></a>

- *Type:* string

---

###### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="cdk-multi-tenant.MultiTenantLogGroup.fromLogGroupName.parameter.logGroupName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_logs.LogGroupGrants</code> | Collection of grant methods for a LogGroup. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | The ARN of this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name of this log group. |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.logGroupRef">logGroupRef</a></code> | <code>aws-cdk-lib.interfaces.aws_logs.LogGroupReference</code> | A reference to a LogGroup resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-multi-tenant.MultiTenantLogGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-multi-tenant.MultiTenantLogGroup.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-multi-tenant.MultiTenantLogGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `grants`<sup>Required</sup> <a name="grants" id="cdk-multi-tenant.MultiTenantLogGroup.property.grants"></a>

```typescript
public readonly grants: LogGroupGrants;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroupGrants

Collection of grant methods for a LogGroup.

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="cdk-multi-tenant.MultiTenantLogGroup.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

The ARN of this log group.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="cdk-multi-tenant.MultiTenantLogGroup.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The name of this log group.

---

##### `logGroupRef`<sup>Required</sup> <a name="logGroupRef" id="cdk-multi-tenant.MultiTenantLogGroup.property.logGroupRef"></a>

```typescript
public readonly logGroupRef: LogGroupReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_logs.LogGroupReference

A reference to a LogGroup resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantLogGroup.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="cdk-multi-tenant.MultiTenantLogGroup.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

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

new MultiTenantUserPool(scope: Construct, id: string, props?: UserPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_cognito.UserPoolProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-multi-tenant.MultiTenantUserPool.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolProps

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



