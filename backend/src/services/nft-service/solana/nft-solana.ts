import * as web3 from '@solana/web3.js';
import * as token from '@solana/spl-token';

import { AccountProviderInterface, NFTServiceInterface } from '../common/defs';

// TODO: fix hard-code
const AMOUNT_TO_MINT: bigint = 1000000000000000n;

export class NFTSolana implements NFTServiceInterface {
    private provider: AccountProviderInterface;

    constructor(provider: AccountProviderInterface) {
        this.provider = provider;
    }

    public async mintNFT(data: any): Promise<any> {
        const connection = this.provider.getConnection();
        const payer = this.provider.getSigner();
        const tokenMint = await token.createMint(connection, payer, payer.publicKey, payer.publicKey, 0);

        const fromTokenAccount = await token.getOrCreateAssociatedTokenAccount(
            connection,
            payer,
            tokenMint,
            payer.publicKey,
        );

        const creationSignature = await token.mintTo(
            connection,
            payer,
            tokenMint,
            fromTokenAccount.address,
            payer.publicKey,
            AMOUNT_TO_MINT,
        );

        return { tokenMint, creationSignature };
    }

    public async transfer(toAddress: string, mintAddress: string, amount: number): Promise<any> {
        console.log('transfer:', toAddress, mintAddress, amount);
        const connection = this.provider.getConnection();
        const tokenMint = new web3.PublicKey(mintAddress);
        const toPubicKey = new web3.PublicKey(toAddress);
        const payer = this.provider.getSigner();

        const fromTokenAccount = await token.getOrCreateAssociatedTokenAccount(
            connection,
            payer,
            tokenMint,
            payer.publicKey,
        );

        const toTokenAccount = await token.getOrCreateAssociatedTokenAccount(connection, payer, tokenMint, toPubicKey);

        console.log('transfer:', { fromTokenAccount, toTokenAccount });

        const transactionSignature = await token.transfer(
            connection,
            payer,
            fromTokenAccount.address,
            toTokenAccount.address,
            payer.publicKey,
            amount,
        );

        return transactionSignature;
    }
}
