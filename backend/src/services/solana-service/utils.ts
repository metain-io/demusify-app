import configs from 'configs';
import { Connection, Signer, Keypair, PublicKey, Cluster, clusterApiUrl } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import * as splToken from '@solana/spl-token';
import base58 from 'bs58';
import { bundlrStorage, keypairIdentity, Metaplex, UploadMetadataInput } from '@metaplex-foundation/js';

export const MAX_AMOUNT_TO_MINT: bigint = 1000000000000000n;

export function getConnection() {
    return new Connection(clusterApiUrl(configs.solana.cluster as Cluster));
}

export function getMasterAccount() {
    const secretKey = base58.decode(configs.solana.masterPrivateKey);
    return Keypair.fromSecretKey(secretKey);
}

export async function findAssociatedTokenAccount(
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
): Promise<PublicKey> {
    return PublicKey.findProgramAddressSync(
        [walletAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer()],
        ASSOCIATED_TOKEN_PROGRAM_ID,
    )[0];
}

export async function createAssociatedTokenAccount(
    connection: Connection,
    payer: Signer,
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
): Promise<PublicKey> {
    return await splToken.createAssociatedTokenAccount(connection, payer, tokenMintAddress, walletAddress);
}

export async function findOrCreateAssociatedTokenAccount(
    connection: Connection,
    payer: Signer,
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
) {
    const MAX_LOOPS = 5;
    const REFRESH_TIME_MS = 5000;

    let count = 0;
    let token = null;
    while (count < MAX_LOOPS) {
        try {
            token = await findAssociatedTokenAccount(walletAddress, tokenMintAddress);

            const tokenAccountsByOwner = await connection.getTokenAccountsByOwner(walletAddress, {
                mint: tokenMintAddress,
            });

            const exists = tokenAccountsByOwner.value.find((ta) => ta.pubkey.toBase58() == token.toBase58());

            if (!exists) {
                token = await createAssociatedTokenAccount(connection, payer, walletAddress, tokenMintAddress);
                await waitFor(REFRESH_TIME_MS);
            }

            if (!token) {
                ++count;

                if (count > MAX_LOOPS) {
                    throw new Error('AssociatedTokenNotFound');
                }

                await waitFor(REFRESH_TIME_MS);
            } else {
                break;
            }
        } catch (ex) {
            ++count;
            if (count > MAX_LOOPS) {
                throw ex;
            } else {
                console.error('PENDING:', ex);
            }

            await waitFor(REFRESH_TIME_MS);
        }
    }

    return token;
}

export function waitFor(ms: number) {
    return new Promise((resolve) => setTimeout(() => resolve(null), ms));
}

export function getMetaplex(connection: Connection, wallet: Keypair) {
    const metaplex = Metaplex.make(connection)
        .use(keypairIdentity(wallet))
        .use(
            bundlrStorage({
                address: 'https://devnet.bundlr.network',
                providerUrl: clusterApiUrl(configs.solana.cluster as Cluster),
                timeout: 60000,
            }),
        );

    return metaplex;
}
