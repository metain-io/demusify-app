import configs from 'configs';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

export class AuthService {
    async authenticateAccessToken(accessToken: string) {
        const verifer = CognitoJwtVerifier.create({
            userPoolId: configs.cognito.userPoolId,
            tokenUse: configs.cognito.tokenUse == 'access' ? 'access' : 'id',
            clientId: configs.cognito.clientId,
        });

        const payload = await verifer.verify(accessToken);

        return payload;
    }
}
