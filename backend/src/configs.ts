const configs = {
    dynamoose: {
        region: process.env.DYNAMOOSE_REGION || '...',
        credentials: {
            accessKeyId: process.env.DYNAMOOSE_ACCESS_KEY_ID || '...',
            secretAccessKey: process.env.DYNAMOOSE_SECRET_ACCESS_KEY || '...',
        },
    },
};

export default configs;
