import * as AWS from 'aws-sdk';
import fs from 'fs'

// Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');

// // Load credentials and set Region from JSON file
// AWS.config.loadFromPath('./config.json');

// // Create the IAM service object
// var lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });

const file = fs.readFile('/cognito-trigger-handler.ts', (err, data) => {
    console.log('ERROR: ', err)
    console.log('DATA: ', data)
})

// var params: AWS.Lambda.Types.CreateFunctionRequest = {
//     Code: {
//         // /* required */ S3Bucket: 'BUCKET_NAME',
//         // S3Key: 'ZIP_FILE_NAME',
//         ZipFile: {}
//     },
//     FunctionName: 'slotTurn' /* required */,
//     Handler: 'slotSpin.Slothandler' /* required */,
//     Role: 'ROLE_ARN' /* required */,
//     Runtime: 'nodejs8.10' /* required */,
//     Description: 'Slot machine game results generator',
// };
// lambda.createFunction(params, function (err, data) {
//     if (err) console.log(err); // an error occurred
//     else console.log('success'); // successful response
// });




// import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

// export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
//   console.log(`Event: ${JSON.stringify(event, null, 2)}`);
//   console.log(`Context: ${JSON.stringify(context, null, 2)}`);
//   return {
//       statusCode: 200,
//       body: JSON.stringify({
//           message: 'hello world',
//       }),
//    };
// };
