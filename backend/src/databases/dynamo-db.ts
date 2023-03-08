import configs from 'configs';
import * as dynamoose from 'dynamoose';

const dynamoDb = new dynamoose.aws.ddb.DynamoDB(configs.dynamoose);

export { dynamoDb };
