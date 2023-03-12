export type MapProcessingRequest = {
    [key: string]: Promise<any> | undefined
}

export type OnRequestFailedCallBack = (error: any) => void

export type OnRequestSuccessCallBack = (response: any) => void
