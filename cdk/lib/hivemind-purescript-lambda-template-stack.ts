import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
import path = require('path');

export class HivemindPurescriptLambdaTemplateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'HivemindPurescriptLambdaTemplate', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset("../lambda.zip"),
    });
  }
}
