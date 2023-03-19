import AWS from 'aws-sdk';
import configs from 'configs';

export async function sendSqsMessage(message: any) {
    return new Promise((resolve, reject) => {
        AWS.config.update(configs.awsSdk);

        const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

        const params: AWS.SQS.SendMessageRequest = {
            MessageBody: message,
            QueueUrl: configs.sqs.queueUrl,
        };

        sqs.sendMessage(params, (error, data) => {
            if (error) {
                console.log('sendSqsMessage - failed', error);
                reject(error);
                return;
            }

            console.log('sendSqsMessage - succeeded', data);
            resolve(data);
        });
    });
}
