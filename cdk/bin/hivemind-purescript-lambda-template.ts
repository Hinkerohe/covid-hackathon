#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HivemindPurescriptLambdaTemplateStack } from '../lib/hivemind-purescript-lambda-template-stack';

const app = new cdk.App();
new HivemindPurescriptLambdaTemplateStack(app, 'HivemindPurescriptLambdaTemplateStack', {
    env: {
        region: 'eu-west-1',
        account: '397794117513'
    }
});