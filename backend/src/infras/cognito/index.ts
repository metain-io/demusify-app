require('dotenv').config();
import {
    CognitoIdentityProviderClient,
    CreateUserPoolCommandInput,
    CreateUserPoolCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import configs from 'configs';

const lambdaCognitoARN = 'arn:aws:lambda:ap-southeast-1:218069044350:function:beta-demu-cognito-trigger';

export class Cognito {
    public createPool() {
        console.log('========================== COGNITO ====== createPool ===');
        // console.log("configs: ", { configs });

        const client = new CognitoIdentityProviderClient({
            region: configs.awsSdk.region,
            credentials: { accessKeyId: configs.awsSdk.accessKeyId, secretAccessKey: configs.awsSdk.secretAccessKey },
        });

        var params: CreateUserPoolCommandInput = {
            PoolName: 'test-create-pool-with-js', // string /* required */,
            AccountRecoverySetting: {
                RecoveryMechanisms: [
                    {
                        Name: 'admin_only', // verified_email | verified_phone_number | admin_only /* required */,
                        Priority: 1, // 'NUMBER_VALUE' /* required */,
                    },
                    /* more items */
                ],
            },
            // AdminCreateUserConfig: {
            //     AllowAdminCreateUserOnly: true,                        //    true || false,
            //     // InviteMessageTemplate: {
            //     //     EmailMessage: 'STRING_VALUE',
            //     //     EmailSubject: 'STRING_VALUE',
            //     //     SMSMessage: 'STRING_VALUE',
            //     // },
            //     UnusedAccountValidityDays: 30                           // 'NUMBER_VALUE',
            // },
            // AliasAttributes: [
            //     phone_number | email | preferred_username,
            //     /* more items */
            // ],
            // AutoVerifiedAttributes: [
            //     phone_number | email,
            //     /* more items */
            // ],
            // DeletionProtection: 'ACTIVE',                               // ACTIVE | INACTIVE,
            // DeviceConfiguration: {
            //     ChallengeRequiredOnNewDevice: false,                    // true || false,
            //     DeviceOnlyRememberedOnUserPrompt: false,                // true || false,
            // },
            // EmailConfiguration: {
            //     ConfigurationSet: 'STRING_VALUE',
            //     EmailSendingAccount: COGNITO_DEFAULT | DEVELOPER,
            //     From: 'STRING_VALUE',
            //     ReplyToEmailAddress: 'STRING_VALUE',
            //     SourceArn: 'STRING_VALUE',
            // },
            // EmailVerificationMessage: 'STRING_VALUE',
            // EmailVerificationSubject: 'STRING_VALUE',
            LambdaConfig: {
                CreateAuthChallenge: lambdaCognitoARN,
                // CustomEmailSender: {
                //     LambdaArn: 'STRING_VALUE' /* required */,
                //     LambdaVersion: V1_0 /* required */,
                // },
                // CustomMessage: 'STRING_VALUE',
                // CustomSMSSender: {
                //     LambdaArn: 'STRING_VALUE' /* required */,
                //     LambdaVersion: V1_0 /* required */,
                // },
                DefineAuthChallenge: lambdaCognitoARN,
                // KMSKeyID: 'STRING_VALUE',
                // PostAuthentication: 'STRING_VALUE',
                // PostConfirmation: 'STRING_VALUE',
                // PreAuthentication: 'STRING_VALUE',
                PreSignUp: lambdaCognitoARN,
                // PreTokenGeneration: 'STRING_VALUE',
                // UserMigration: 'STRING_VALUE',
                VerifyAuthChallengeResponse: lambdaCognitoARN,
            },

            MfaConfiguration: 'OFF', // OFF | ON | OPTIONAL
            Policies: {
                PasswordPolicy: {
                    MinimumLength: 8, // 'NUMBER_VALUE',
                    RequireLowercase: true, // true || false,
                    RequireNumbers: true, // true || false,
                    RequireSymbols: false, // true || false,
                    RequireUppercase: true, // true || false,
                    TemporaryPasswordValidityDays: 7, // 'NUMBER_VALUE',
                },
            },
            Schema: [
                {
                    AttributeDataType: 'String', // String | Number | DateTime | Boolean,
                    DeveloperOnlyAttribute: false, // true || false,
                    Mutable: true, // true || false,
                    Name: 'tmp_field',
                    // NumberAttributeConstraints: {
                    //     MaxValue: 'STRING_VALUE',
                    //     MinValue: 'STRING_VALUE',
                    // },
                    Required: false, // true || false,
                    StringAttributeConstraints: {
                        MaxLength: '256', // 'STRING_VALUE',
                        MinLength: '0', // 'STRING_VALUE',
                    },
                },
                /* more items */
            ],
            // SmsAuthenticationMessage: 'STRING_VALUE',
            // SmsConfiguration: {
            //     SnsCallerArn: 'STRING_VALUE' /* required */,
            //     ExternalId: 'STRING_VALUE',
            //     SnsRegion: 'STRING_VALUE',
            // },
            // SmsVerificationMessage: 'STRING_VALUE',
            // UserAttributeUpdateSettings: {
            //     AttributesRequireVerificationBeforeUpdate: [
            //         phone_number | email,
            //         /* more items */
            //     ],
            // },
            // UserPoolAddOns: {
            //     AdvancedSecurityMode: OFF | AUDIT | ENFORCED /* required */,
            // },
            UserPoolTags: {
                // '<TagKeysType>': 'STRING_VALUE',
                /* '<TagKeysType>': ... */
                'Name': 'beta-demu-decentralized',
                'project-name': 'Demusify',
                'environment': 'beta',
                'AUTHOR': 'Metain',
            },
            // UsernameAttributes: [
            //     phone_number | email,
            //     /* more items */
            // ],
            UsernameConfiguration: {
                CaseSensitive: true, // true || false /* required */,
            },
            // VerificationMessageTemplate: {
            //     DefaultEmailOption: 'CONFIRM_WITH_CODE',                // CONFIRM_WITH_LINK | CONFIRM_WITH_CODE,
            //     // EmailMessage: 'STRING_VALUE',
            //     // EmailMessageByLink: 'STRING_VALUE',
            //     // EmailSubject: 'STRING_VALUE',
            //     // EmailSubjectByLink: 'STRING_VALUE',
            //     // SmsMessage: 'STRING_VALUE',
            // },
        };

        const command = new CreateUserPoolCommand(params);

        client
            .send(command)
            .then((rs) => {
                console.log('SUCCESS: ', rs);
            })
            .catch((error) => {
                console.log('ERR: ', error);
            });
    }
}

const cognito = new Cognito();

cognito.createPool();
