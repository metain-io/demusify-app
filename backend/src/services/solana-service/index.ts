import * as splToken from '@solana/spl-token';
import { PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getConnection, getMasterAccount, findOrCreateAssociatedTokenAccount, MAX_AMOUNT_TO_MINT, waitFor } from './utils';

export class SolanaService {
    async createTokenMint() {
        const WAIT_AFTER_MINT_MS = 5000;

        const connection = getConnection();
        const payer = getMasterAccount();
        const tokenMint = await splToken.createMint(connection, payer, payer.publicKey, payer.publicKey, 0);
        await waitFor(WAIT_AFTER_MINT_MS);

        return tokenMint.toBase58();
    }

    async mintTokenToMaster(tokenMintAddress: string, amount: number | bigint = MAX_AMOUNT_TO_MINT) {
        const MAX_RETRIES = 5;
        const RETRY_WAIT_MS = 5000;

        const connection = getConnection();
        const payer = getMasterAccount();
        const tokenMint = new PublicKey(tokenMintAddress);

        const tokenAccount = await findOrCreateAssociatedTokenAccount(connection, payer, payer.publicKey, tokenMint);

        let mintToSignature: string = null;
        let count = 0;
        while (count < MAX_RETRIES) {
            try {
                mintToSignature = await splToken.mintTo(
                    connection,
                    payer,
                    tokenMint,
                    tokenAccount,
                    payer,
                    amount,
                );

                break;
            } catch (ex) {
                ++count;
                if (count > MAX_RETRIES) {
                    throw ex;
                }

                console.error('PENDING:', ex);
                await waitFor(RETRY_WAIT_MS);
            }
        }

        return mintToSignature;
    }

    async transferTokenFromMaster(tokenMintAddress: string, receiverAddress: string, amount: number | bigint) {
        const MAX_RETRIES = 5;
        const RETRY_WAIT_TIME = 5000;

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

        let transferSignature: string = null;
        let count = 0;
        while (count < MAX_RETRIES) {
            try {
                transferSignature = await splToken.transfer(
                    connection,
                    payer,
                    senderTokenAccount,
                    recevierTokenAccount,
                    payer.publicKey,
                    amount,
                );

                break;
            } catch (ex) {
                ++count;
                if (count > MAX_RETRIES) {
                    throw ex;
                }

                console.error('PENDING:', ex);
                await waitFor(RETRY_WAIT_TIME);
            }
        }

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
                lamports: parseInt(amount * LAMPORTS_PER_SOL + ''),
            }),
        );

        const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);

        return signature;
    }
}
