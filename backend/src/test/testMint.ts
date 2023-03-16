require('dotenv').config();

import { ItemService, NFTCreationService, SolanaService } from '@services/index';
import { waitFor } from '@services/solana-service/utils';

async function main() {
    const userWalletAddress = '2fzWfRfhma5pJXa8pK5nTTyHKiBGVMJcEkEN74mCrncS';

    const solanaService = new SolanaService();
    //const tokenMintAddress = await solanaService.createTokenMint();
    const tokenMintAddress = 'ECin3Rv31cofPagNJjXSKT6LcMenbsXboxJvXdEyhfgc';
    console.log(tokenMintAddress)
    const mintToMasterSignature = await solanaService.mintTokenToMaster(tokenMintAddress);
    console.log(mintToMasterSignature);
    const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
        tokenMintAddress,
        userWalletAddress,
        1,
    );

    console.log(transferToCreatorSignature)
}

main();
