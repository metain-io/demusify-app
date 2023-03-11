import { AxiosRequestConfig, AxiosResponse } from 'axios';
import crypto from 'crypto';
import AuthService, { IAuthService } from '@modules/auth/services/auth';
import DataServiceInstance, { DataKey, IDataService } from '@modules/common/data';
import BaseAxiosClient from '@modules/common/api/providers/BaseProvider/clients/BaseAxios';

class AxiosClient extends BaseAxiosClient {
    private _authService: IAuthService;
    private _dataService: IDataService;

    constructor(authService: IAuthService, dataService: IDataService) {
        super({
            baseURL: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
            headers: {
                'content-type': 'application/json',
            },
            paramsSerializer: (param) => new URLSearchParams(param).toString(),
        });

        this._authService = authService;
        this._dataService = dataService;
    }

    protected async requestInterceptor(configs: AxiosRequestConfig) {
        // const requestUuid = Uuid();

        // this._requestQueue.push(requestUuid)

        // await this.waitForTurn(requestUuid)

        const userSession = this._authService.currentUser?.getSignInUserSession();

        // @ts-ignore
        const userPoolId = this._authService.currentUser?.pool.userPoolId;
        const custodialUserPoolId = process.env.NEXT_PUBLIC_CUSTODIAL_IDENTITY_POOL_ID;
        const confidentUserPoolId = process.env.NEXT_PUBLIC_CONFIDENT_IDENTITY_POOL_ID;

        const XUserPool =
            userPoolId == custodialUserPoolId ? 'custodial' : userPoolId == confidentUserPoolId ? 'decentralized' : '';

        configs.headers = {
            ...configs.headers,
            // 'x-request-uuid': requestUuid,
            // 'x-request-token': await this.generateRequestToken(),
            'x-access-token': userSession?.getAccessToken().getJwtToken() || '',
            'x-user-pool': XUserPool,
            'x-id-token': userSession?.getIdToken().getJwtToken() || '',
        };

        return configs;
    }

    protected async responseInterceptor(response: AxiosResponse) {
        let finalResponse: any = response;

        if (response?.data) {
            finalResponse = response.data;

            try {
                finalResponse = JSON.parse(finalResponse);
            } catch (error) {}
        }

        // const requestUuid = response.config.headers?.['x-request-uuid'];

        // const publicKey = finalResponse.body?.publicKey || '';
        // const randomString = finalResponse.randomString || finalResponse.body?.randomString || '';

        // if (publicKey) {
        //     await this._dataService.setItem(DataKey.DATA_AXIOS_CLIENT_PUBLIC_KEY, publicKey);
        // }

        // if (randomString) {
        //     await this._dataService.setItem(DataKey.DATA_AXIOS_CLIENT_RANDOM_STRING, randomString);
        // }

        // this._requestQueue.shift();

        return finalResponse;
    }

    protected async errorInterceptor(error: any) {
        // const requestUuid = error?.config?.headers?.['x-request-uuid'];

        // const randomString = error?.response?.data?.randomString;

        // if (randomString) {
        //     await this._dataService.setItem(DataKey.DATA_AXIOS_CLIENT_RANDOM_STRING, randomString);
        // }

        // this._requestQueue.shift();

        throw error;
    }

    private async generateRequestToken() {
        const publicKey = await this._dataService.getItem(DataKey.DATA_AXIOS_CLIENT_PUBLIC_KEY, '');
        const randomString = await this._dataService.getItem(DataKey.DATA_AXIOS_CLIENT_RANDOM_STRING, '');

        if (!publicKey || !randomString) return '';

        try {
            const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(randomString));
            const requestToken = encryptedData.toString('base64');

            return requestToken;
        } catch (error) {
            console.log('generateRequestToken---ERROR', error);
        }

        return '';
    }
}

export default new AxiosClient(AuthService, DataServiceInstance);
export { AxiosClient };
