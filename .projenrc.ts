import { awscdk } from 'projen';
const cdkVersion = '2.235.1';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'user',
  authorAddress: 'user@domain.com',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: 'cdk-multi-tenant',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:szukalski/cdk-multi-tenant.git',
  releaseToNpm: true,
  npmTrustedPublishing: true,
  npmProvenance: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();