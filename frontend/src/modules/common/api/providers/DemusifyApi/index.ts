import Client from '@modules/common/api/providers/DemusifyApi/clients/Axios';
import { generateRequestKey, resolvePromise } from '@modules/common/api/utils';
import AuthService, { IAuthService } from '@modules/auth/services/auth';
import BaseApiProvider, { IBaseApiProvider } from '../BaseProvider';
import { OnRequestFailedCallBack } from '../BaseProvider/@types';
import { v4 as Uuid } from 'uuid';

interface IDemusifyApi extends IBaseApiProvider {
    onRetriedRequestFailedWithErrorCode401: OnRequestFailedCallBack;
    walletApp: {
        getCreator(username: string): Promise<any>;
        updateCreator(username: string, creator: any): Promise<any>;
        getUserNftData(username: string): Promise<any>;
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

        getUserNftData: async (username: string): Promise<any> => {
            const uri = `/demusify/api/v1/user/nftData/${username}`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },
    };

    items = {
        createItemTokenMint: async () => {
            const uri = `/demusify/api/v1/items/token-mint`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.post(uri, {}));
            return rs;
        },
        createItemTokenMintMetadata: async (item: any) => {
            const uri = `/demusify/api/v1/items/token-mint-metadata`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () =>
                Client.post(uri, {
                    item,
                }),
            );
            return rs;
        },
        mintItemToken: async (item: any) => {
            const uri = `/demusify/api/v1/items/mint-token-request`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () =>
                Client.post(uri, {
                    item,
                }),
            );
            return rs;
        },
        createItem: async (item: any) => {
            const uri = `/demusify/api/v1/items`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () =>
                Client.post(uri, {
                    item,
                }),
            );
            return rs;
        },

        getItem: async (itemId: string) => {
            const uri = `/demusify/api/v1/items/${itemId}`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },

        getListItems: async () => {
            const uri = `/demusify/api/v1/items`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },

        getListItemTransactions: async (itemId: string) => {
            const uri = `/demusify/api/v1/items/${itemId}/transactions`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },
    };

    s3 = {
        getSignedUrl: async (fileType: string) => {
            const uri = `/demusify/api/v1/s3/signed-url`;
            const requestKey = generateRequestKey(fileType, Uuid());
            const rs = await this.executeRequest(requestKey, () =>
                Client.get(uri, {
                    params: {
                        fileType,
                    },
                }),
            );

            return rs;
        },
    };

    itemPayment = {
        createItemPayment: async ({
            itemId,
            licenseId,
            paymentSignature,
            payerAddress,
        }: {
            itemId: string;
            licenseId: string;
            paymentSignature: string;
            payerAddress: string;
        }) => {
            const uri = `/demusify/api/v1/item-payments`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () =>
                Client.post(uri, {
                    itemId,
                    licenseId,
                    paymentSignature,
                    payerAddress,
                }),
            );
            return rs;
        },
    };

    me = {
        getListCreations: async () => {
            const uri = `/demusify/api/v1/me/creations`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },

        getListLicenses: async () => {
            const uri = `/demusify/api/v1/me/licenses`;
            const requestKey = generateRequestKey(uri);
            const rs = await this.executeRequest(requestKey, () => Client.get(uri, {}));
            return rs.data || {};
        },
    };
}

export default new DemusifyApi(AuthService);
export type { IDemusifyApi };
