import { ItemModel, NFTLicensedModel, NFTLicensedTransactionModel } from '@models/index';

export class NFTLicensedService {
    async create(data: any) {
        return await (await NFTLicensedModel.create(data)).save();
    }

    async list(limit = 100) {
        return await NFTLicensedModel.scan().limit(limit).exec();
    }

    async get(id: string) {
        return (await NFTLicensedModel.query({ id }).exec())?.[0];
    }

    async getByUsername(username: string) {
        const rs = await this.getAll()
        return rs?.filter((item) => item.consumerID === username) || []
    }

    async getAll() {
        // const licenses = await NFTLicensedModel.query({ consumerID: username }).exec()
        // const licenseTransactions = await NFTLicensedTransactionModel.scan().exec()
        // const items = await ItemModel.scan().exec()

        const [licenses, licenseTransactions, items] = await Promise.all(
            [
                NFTLicensedModel.scan().exec(),
                NFTLicensedTransactionModel.scan().exec(),
                ItemModel.scan().exec()
            ]
        );
        
        licenses?.forEach((license) => {
            let licensesType = []
            let transactions = licenseTransactions.filter(
                (licenseTransaction) =>
                    licenseTransaction.nftID === license.nftID && licenseTransaction.consumerID === license.consumerID,
            );
            let item = items.find((value) => value.tokenMintAddress === license.nftID)
            transactions.forEach((tx) => {
                if (tx.license && licensesType.indexOf(tx.license) < 0){
                    licensesType.push(tx.license)
                }
            })

            license.transactions = transactions || [];
            license.detail = item || {}
            license.licenses = licensesType.sort().join(' | ')
        })

        return licenses;
    }

    async update(username: string, data: any) {
        const NFTLicensed = await this.get(username);

        if (!NFTLicensed) {
            // throw new Error('NFTLicensed is not exists');
            return await this.create({...data, username})
        }

        delete data['username'];

        for (let key in data) {
            NFTLicensed[key] = data[key];
        }

        return await NFTLicensed.save();
    }

    async delete(username: string) {
        const NFTLicensed = await this.get(username);

        if (!NFTLicensed) {
            throw new Error('NFTLicensed is not exists');
        }

        return await NFTLicensed.delete();
    }
}
