import { delay, resolvePromise } from '@modules/common/api/utils'
import { MapProcessingRequest, OnRequestFailedCallBack, OnRequestSuccessCallBack } from './@types'

interface IBaseApiProvider {
    onRequestFailed: OnRequestFailedCallBack
    onRequestSuccess: OnRequestSuccessCallBack
}

abstract class BaseApiProvider {
    protected _mapProcessingRequest: MapProcessingRequest = {}
    protected _onRequestFailed?: OnRequestFailedCallBack
    protected _onRequestSuccess?: OnRequestSuccessCallBack

    set onRequestFailed(callback: OnRequestFailedCallBack) {
        this._onRequestFailed = callback
    }

    set onRequestSuccess(callback: OnRequestSuccessCallBack) {
        this._onRequestSuccess = callback
    }

    protected async executeRequest(key: string, request: () => Promise<any>) {
        if (this._mapProcessingRequest[key]) {
            return await this._mapProcessingRequest[key]
        }

        this._mapProcessingRequest[key] = request()

        let [response, error] = await resolvePromise(this._mapProcessingRequest[key]!)

        this._mapProcessingRequest[key] = undefined

        if (response) {
            this._onRequestSuccess?.(response)
            return response
        }

        if (error) {
            this._onRequestFailed?.(error)
            throw error
        }
    }

    protected async retryRequest(request: () => Promise<any>, numOfTrial: number = 1, delayTimeEachTry: number = 3000) {
        for (let i = 0; i < numOfTrial; i++) {
            const [response, error] = await resolvePromise(request())

            if (response) {
                return response
            }

            if (error && i == numOfTrial - 1) {
                throw error
            }

            await delay(delayTimeEachTry)
        }
    }
}

export default BaseApiProvider
export type { IBaseApiProvider }
