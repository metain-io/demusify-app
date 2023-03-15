import * as web3 from '@solana/web3.js';
import * as token from '@solana/spl-token';

import { AccountProviderInterface, NFTServiceInterface } from '../common/defs';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';

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

        console.log({ tokenMint });

        const fromTokenAccount = await findOrCreateAssociatedTokenAddress(
            connection,
            payer,
            payer.publicKey,
            tokenMint,
        );

        console.log({ fromTokenAccount });

        const mintSignature = await token.mintTo(
            connection,
            payer,
            tokenMint,
            fromTokenAccount,
            payer.publicKey,
            AMOUNT_TO_MINT,
        );

        return { tokenMint, creationSignature: mintSignature };
    }

    public async transfer(mintAddress: string, toAddress: string, amount: number): Promise<any> {
        console.log('transfer:', { mintAddress, toAddress, amount });
        const connection = this.provider.getConnection();
        const tokenMint = new web3.PublicKey(mintAddress);
        const toPubicKey = new web3.PublicKey(toAddress);
        const payer = this.provider.getSigner();

        console.log('transfer:', { tokenMint, toPubicKey, payer });

        const fromTokenAccount = await findOrCreateAssociatedTokenAddress(
            connection,
            payer,
            payer.publicKey,
            tokenMint,
        );

        // console.log('transfer:', { testFrom });

        // const fromTokenAccount = await token.getOrCreateAssociatedTokenAccount(
        //     connection,
        //     payer,
        //     tokenMint,
        //     payer.publicKey,
        // );

        console.log('transfer:', { fromTokenAccount });

        const toTokenAccount = await findOrCreateAssociatedTokenAddress(connection, payer, toPubicKey, tokenMint);

        // console.log('transfer:', { testTo });

        // const toTokenAccount = await token.getOrCreateAssociatedTokenAccount(connection, payer, tokenMint, toPubicKey);

        console.log('transfer:', { toTokenAccount });

        const transactionSignature = await token.transfer(
            connection,
            payer,
            fromTokenAccount,
            toTokenAccount,
            payer.publicKey,
            amount,
        );

        console.log('transfer:', { transactionSignature });

        return transactionSignature;
    }
}

async function findAssociatedTokenAddress(
    walletAddress: web3.PublicKey,
    tokenMintAddress: web3.PublicKey,
): Promise<web3.PublicKey> {
    console.log('findAssociatedTokenAddress', { walletAddress, tokenMintAddress });

    return web3.PublicKey.findProgramAddressSync(
        [walletAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer()],
        ASSOCIATED_TOKEN_PROGRAM_ID,
    )[0];
}

async function createAssociatedTokenAddress(
    connection: web3.Connection,
    payer: web3.Signer,
    walletAddress: web3.PublicKey,
    tokenMintAddress: web3.PublicKey,
): Promise<web3.PublicKey> {
    console.log('createAssociatedTokenAddress', { walletAddress, tokenMintAddress });

    return await token.createAssociatedTokenAccount(connection, payer, tokenMintAddress, walletAddress);
}

async function findOrCreateAssociatedTokenAddress(
    connection: web3.Connection,
    payer: web3.Signer,
    walletAddress: web3.PublicKey,
    tokenMintAddress: web3.PublicKey,
) {
    let token = await findAssociatedTokenAddress(walletAddress, tokenMintAddress);

    const tokenAccountsByOwner = await connection.getTokenAccountsByOwner(walletAddress, { mint: tokenMintAddress });

    const exists = tokenAccountsByOwner.value.find((ta) => ta.pubkey.toBase58() == token.toBase58());

    if (!exists) {
        token = await createAssociatedTokenAddress(connection, payer, walletAddress, tokenMintAddress);
    }

    if (!token) {
        throw new Error('AssociatedTokenNotFound');
    }

    return token;
}
