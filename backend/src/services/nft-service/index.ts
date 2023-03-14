import { NFTServiceInterface } from './common/defs';
import { NFTSolana } from './solana/nft-solana';
import { SolanaAccountProvider } from './solana/solana-account-provider';

const TEST_WALLET_PRIVATE_KEY =
    'gw9b4YEgfABzju4n8T9h6H4bKyVShPL4oxGmr6BdznjP5idCJ5Xiei81zwZtsVhntYDumqWMaaG3NR2pq2it6r9';

function createService(data: any): NFTServiceInterface {
    // TODO: fix hard-code
    const provider = new SolanaAccountProvider('devnet', TEST_WALLET_PRIVATE_KEY);
    const service = new NFTSolana(provider);
    return service;
}

export class NFTService {
    async createItem(requesterUserWallet: string, data?: any): Promise<any> {
        const service = createService(data);
        const mintResult = await service.mintNFT(data);

        console.log('0---->', mintResult, mintResult.tokenMint, mintResult.tokenMint.toBase58());

        // Send first token to music creator, this is the Master License
        await service.transfer(mintResult.tokenMint.toBase58(), requesterUserWallet, 1);

        return mintResult;
    }
}
