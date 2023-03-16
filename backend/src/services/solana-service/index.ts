import * as splToken from '@solana/spl-token';
import { PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getConnection, getMasterAccount, findOrCreateAssociatedTokenAccount, MAX_AMOUNT_TO_MINT } from './utils';

export class SolanaService {
    async createTokenMint() {
        const connection = getConnection();
        const payer = getMasterAccount();
        const tokenMint = await splToken.createMint(connection, payer, payer.publicKey, payer.publicKey, 0);

        return tokenMint.toBase58();
    }

    async mintTokenToMaster(tokenMintAddress: string, amount: number | bigint = MAX_AMOUNT_TO_MINT) {
        const connection = getConnection();
        const payer = getMasterAccount();
        const tokenMint = new PublicKey(tokenMintAddress);

        const tokenAccount = await findOrCreateAssociatedTokenAccount(connection, payer, payer.publicKey, tokenMint);

        const mintToSignature = await splToken.mintTo(
            connection,
            payer,
            tokenMint,
            tokenAccount,
            payer.publicKey,
            amount,
        );

        return mintToSignature;
    }

    async transferTokenFromMaster(tokenMintAddress: string, receiverAddress: string, amount: number | bigint) {
        const connection = getConnection();
        const payer = getMasterAccount();
        const tokenMint = new PublicKey(tokenMintAddress);
        const receiver = new PublicKey(receiverAddress);

        const senderTokenAccount = await findOrCreateAssociatedTokenAccount(
            connection,
            payer,
            payer.publicKey,
            tokenMint,
        );

        const recevierTokenAccount = await findOrCreateAssociatedTokenAccount(connection, payer, receiver, tokenMint);

        const transferSignature = await splToken.transfer(
            connection,
            payer,
            senderTokenAccount,
            recevierTokenAccount,
            payer.publicKey,
            amount,
        );

        return transferSignature;
    }

    async transferSolFromMaster(receiverAddress: string, amount: number) {
        const connection = getConnection();
        const payer = getMasterAccount();
        const receiver = new PublicKey(receiverAddress);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: payer.publicKey,
                toPubkey: receiver,
                lamports: amount * LAMPORTS_PER_SOL,
            }),
        );

        const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);

        return signature;
    }
}
