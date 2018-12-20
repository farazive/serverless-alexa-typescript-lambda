## Nodejs Lambda function with BottleJs DI in typescript

### Features:
* written in typescript
* Bottlejs dependency injection
* npm commands to build, deploy and run the lambda function

### Requirements:
You need a working localstack/localstack docker container

Steps to run:
* npm install
* npm run build-lambda
* npm run deploy-lambda
* npm run run-on-aws

Expected output:
```bash
$ aws --endpoint-url=http://192.168.99.100:4574 lambda invoke --function-name "lambda-development"  outputfile.txt
{
    "StatusCode": 200
}
```