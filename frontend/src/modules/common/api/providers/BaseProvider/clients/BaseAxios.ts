import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { v4 as Uuid } from 'uuid'

abstract class BaseAxiosClient {
    protected _axiosInstance: AxiosInstance
    protected _requestQueue: Array<string> = []

    post: Function
    get: Function
    put: Function
    delete: Function

    constructor(configs?: AxiosRequestConfig) {
        this._axiosInstance = Axios.create(configs)

        this._axiosInstance.interceptors.request.use(this.requestInterceptor.bind(this))
        this._axiosInstance.interceptors.response.use(
            this.responseInterceptor.bind(this),
            this.errorInterceptor.bind(this),
        )

        this.post = this._axiosInstance.post
        this.get = this._axiosInstance.get
        this.put = this._axiosInstance.put
        this.delete = this._axiosInstance.delete
    }

    protected waitForTurn(uuid: string) {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (this._requestQueue.length > 0 && this._requestQueue[0] == uuid) {
                    clearInterval(interval)
                    resolve(uuid)
                }
            })
        })
    }

    protected async requestInterceptor(configs: AxiosRequestConfig) {
        const requestUuid = Uuid()

        this._requestQueue.push(requestUuid)

        await this.waitForTurn(requestUuid)

        configs.headers = {
            ...configs.headers,
            'x-request-uuid': requestUuid,
        }

        return configs
    }

    protected async responseInterceptor(response: AxiosResponse) {
        let finalResponse: any = response

        if (response && response.data) {
            finalResponse = response.data

            try {
                finalResponse = JSON.parse(finalResponse)
            } catch (error) {}
        }

        const requestUuid = response.config.headers?.['x-request-uuid']

        this._requestQueue.shift()

        return finalResponse
    }

    protected async errorInterceptor(error: any) {
        const requestUuid = error.config.headers?.['x-request-uuid']

        this._requestQueue.shift()

        throw error
    }
}

export default BaseAxiosClient
