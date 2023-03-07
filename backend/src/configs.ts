const configs = {
    dynamoose: {
        accessKeyId: process.env.DYNAMOOSE_ACCESS_KEY_ID || '...',
        secretAccessKey: process.env.DYNAMOOSE_SECRET_ACCESS_KEY || '...',
        region: process.env.DYNAMOOSE_REGION || '...',
    },
};

export default configs;
