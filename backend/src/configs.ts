const configs = {
    dynamoose: {
        region: process.env.DYNAMOOSE_REGION || '',
        credentials: {
            accessKeyId: process.env.DYNAMOOSE_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.DYNAMOOSE_SECRET_ACCESS_KEY || '',
        },
    },
    cognito: {
        region: process.env.COGNITO_REGION || '',
        userPoolId: process.env.COGNITO_USER_POOL_ID || '',
        clientId: process.env.COGNITO_CLIENT_ID || '',
        tokenUse: process.env.COGNITO_TOKEN_USE || '',
    },
    solana: {
        cluster: process.env.SOLANA_CLUSTER || '',
        masterPrivateKey: process.env.SOLANA_MASTER_PRIVATE_KEY || '',
    },
    awsSdk: {
        accessKeyId: process.env.AWS_SDK_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SDK_SECRET_KEY,
        region: process.env.AWS_SDK_REGION,
    },
    s3: {
        bucket: process.env.AWS_S3_BUCKET || '',
    },
};

export default configs;
