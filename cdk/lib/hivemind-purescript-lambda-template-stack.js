"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
class HivemindPurescriptLambdaTemplateStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const fn = new lambda.Function(this, 'HivemindPurescriptLambdaTemplate', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            //code: lambda.Code.fromAsset("../",{exclude: ["**", "!index.js","!Main.js","!node_modules/"]}),
            // cd .. && zip -r lambda.zip ./node_modules ./index.js ./Main.js
            code: lambda.Code.fromAsset("../lambda.zip"),
        });
    }
}
exports.HivemindPurescriptLambdaTemplateStack = HivemindPurescriptLambdaTemplateStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl2ZW1pbmQtcHVyZXNjcmlwdC1sYW1iZGEtdGVtcGxhdGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoaXZlbWluZC1wdXJlc2NyaXB0LWxhbWJkYS10ZW1wbGF0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBK0M7QUFHL0MsTUFBYSxxQ0FBc0MsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNsRSxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0NBQWtDLEVBQUU7WUFDdkUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixnR0FBZ0c7WUFDaEcsaUVBQWlFO1lBQ2pFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBWkQsc0ZBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgbGFtYmRhID0gcmVxdWlyZSgnQGF3cy1jZGsvYXdzLWxhbWJkYScpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmV4cG9ydCBjbGFzcyBIaXZlbWluZFB1cmVzY3JpcHRMYW1iZGFUZW1wbGF0ZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGZuID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGl2ZW1pbmRQdXJlc2NyaXB0TGFtYmRhVGVtcGxhdGUnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgICAgIC8vY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwiLi4vXCIse2V4Y2x1ZGU6IFtcIioqXCIsIFwiIWluZGV4LmpzXCIsXCIhTWFpbi5qc1wiLFwiIW5vZGVfbW9kdWxlcy9cIl19KSxcbiAgICAgIC8vIGNkIC4uICYmIHppcCAtciBsYW1iZGEuemlwIC4vbm9kZV9tb2R1bGVzIC4vaW5kZXguanMgLi9NYWluLmpzXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoXCIuLi9sYW1iZGEuemlwXCIpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=