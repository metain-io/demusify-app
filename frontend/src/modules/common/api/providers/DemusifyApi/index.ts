import Client from '@modules/common/api/providers/DemusifyApi/clients/Axios';
import { generateRequestKey, resolvePromise } from '@modules/common/api/utils';
import AuthService, { IAuthService } from '@modules/auth/services/auth';
import BaseApiProvider, { IBaseApiProvider } from '../BaseProvider';
import { OnRequestFailedCallBack } from '../BaseProvider/@types';

interface IDemusifyApi extends IBaseApiProvider {
    onRetriedRequestFailedWithErrorCode401: OnRequestFailedCallBack;
    walletApp: {
        getCreator(username: string): Promise<any>;
        updateCreator(username: string, creator: any): Promise<any>;
    };
}

class DemusifyApi extends BaseApiProvider implements IDemusifyApi {
    private _authService: IAuthService;
    private _onRetriedRequestFailedWithError401?: OnRequestFailedCallBack;

    constructor(authService: IAuthService) {
        super();

        this._authService = authService;
    }

    set onRetriedRequestFailedWithErrorCode401(callback: OnRequestFailedCallBack) {
        this._onRetriedRequestFailedWithError401 = callback;
    }

    protected async executeRequest(key: string, request: () => Promise<any>) {
        if (this._mapProcessingRequest[key]) {
            return await this._mapProcessingRequest[key];
        }

        this._mapProcessingRequest[key] = request();

        let [response, error] = await resolvePromise(this._mapProcessingRequest[key]!);

        if (error && (error as any).response?.status == 401) {
            [response, error] = await resolvePromise(this._authService.refreshUserSession());
            [response, error] = await resolvePromise(this.retryRequest(request, 2));
            error && (error as any).response?.status == 401 && this._onRetriedRequestFailedWithError401?.(error);
        }

        this._mapProcessingRequest[key] = undefined;

        if (response) {
            this._onRequestSuccess?.(response);
            return response;
        }

        if (error) {
            this._onRequestFailed?.(error);
            throw error;
        }
    }

    walletApp = {
        getCreator: async (username: string): Promise<any> => {
            const uri = `/demusify/api/v1/creator/${username}`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },

        updateCreator: async (username: string, creator: any): Promise<any> => {
            const uri = `/demusify/api/v1/creator/${username}`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () =>
                Client.put(uri, {
                    ...creator,
                }),
            );
            return rs;
        },
    };
}

export default new DemusifyApi(AuthService);
export type { IDemusifyApi };
