import CryptoJS from 'crypto-js';

interface IDataService {
    setItem(key: DataKey, value: string): Promise<void>;

    getItem(key: DataKey, fallback: any): Promise<any>;

    removeItem(key: DataKey): Promise<void>;

    clearAll(): Promise<void>;

    clearUserData(): Promise<void>;
}

const ENCRYPT_KEY = process.env.NEXT_PUBLIC_ENCRYPT_KEY || 'NEXT_PUBLIC_ENCRYPT_KEY!@#$%^';

enum DataKey {
    DATA_AXIOS_CLIENT_PUBLIC_KEY = 'data:app_axio_client:public_key',
    DATA_AXIOS_CLIENT_RANDOM_STRING = 'data:app_axios_client:random_string',
}

class DataService implements IDataService {
    async setItem(key: DataKey, value: string): Promise<void> {
        const encryptedValue = await this.encryptValue(value);
        localStorage.setItem(key.toString(), encryptedValue);
    }

    async getItem(key: DataKey, fallback: any = null): Promise<any> {
        const value = localStorage.getItem(key.toString());

        if (!value) {
            return fallback;
        }

        const decryptedValue = await this.decryptValue(value);
        return decryptedValue;
    }

    async updateItem(key: DataKey, attribute: string, value: any) {
        let data = await this.getItem(key);
        if (data) {
            data = JSON.parse(data);
        } else {
            data = {};
        }
        data[attribute] = value;

        this.setItem(key, JSON.stringify(data));
    }

    async removeItem(key: DataKey): Promise<void> {
        localStorage.removeItem(key.toString());
    }

    async clearAll(): Promise<void> {
        localStorage.clear();
    }

    async clearUserData(): Promise<void> {
        Object.values(DataKey).forEach((value) => {
            if (value.startsWith('data:') || value.includes(':user:')) {
                localStorage.removeItem(value);
            }
        });
    }

    private async encryptValue(value: string): Promise<string> {
        const encryptedPassword = CryptoJS.AES.encrypt(value, ENCRYPT_KEY).toString();
        return encryptedPassword;
    }

    private async decryptValue(encryptedValue: string): Promise<string> {
        const password = CryptoJS.AES.decrypt(encryptedValue, ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);
        return password;
    }
}

export default new DataService();
export { DataKey };
export type { IDataService };
