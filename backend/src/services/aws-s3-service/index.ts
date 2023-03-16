import configs from 'configs';
import AWS, { S3 } from 'aws-sdk';

export class AwsS3Service {
    async getSignedUrl(key: string, fileType: string): Promise<{ signedUrl: string; s3Url: string }> {
        AWS.config.update(configs.awsSdk);

        const param = {
            Bucket: configs.s3.bucket,
            Key: key,
            Expires: 100,
            ContentType: fileType,
            ACL: 'public-read',
        };

        const s3 = new S3({
            signatureVersion: 'v4',
        });

        const result = await new Promise<{ signedUrl: string; s3Url: string }>((resolve, reject) =>
            s3.getSignedUrl('putObject', param, (error, url) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve({
                    signedUrl: url,
                    s3Url: `https://${configs.s3.bucket}.s3.amazonaws.com/${key}`,
                });
            }),
        );

        return result;
    }
}
