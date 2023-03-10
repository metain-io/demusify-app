import CryptoJS from 'crypto-js'

const generateRequestKey = (...args: any) => {
    let key = ''

    for (let arg of args) {
        key += JSON.stringify(arg)
    }

    return CryptoJS.MD5(key).toString(CryptoJS.enc.Base64)
}

const delay = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, time)
    })
}

const resolvePromise = async (promise: Promise<any>) => {
    try {
        const result = await promise
        return [result, null]
    } catch (error) {
        return [null, error]
    }
}

export { generateRequestKey, delay, resolvePromise }
