import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

import { AccountProviderInterface, NFTServiceInterface } from "../common/defs";

// TODO: fix hard-code
const AMOUNT_TO_MINT: bigint = 1000000000000000n;

export class NFTSolana implements NFTServiceInterface {
  private provider: AccountProviderInterface;

  constructor (provider: AccountProviderInterface) {
    this.provider = provider;
  }

  public async mintNFT (data: any): Promise<any> {
    const connection = this.provider.getConnection();
    const payer = this.provider.getSigner();
    const tokenMint = await token.createMint(connection, payer, payer.publicKey, payer.publicKey, 0);
    const creationSignature = await token.mintTo(connection, payer, tokenMint, payer.publicKey, payer.publicKey, AMOUNT_TO_MINT);
    return { tokenMint, creationSignature };
  }

  public async transfer (to: string, amount: number): Promise<any> {
    const connection = this.provider.getConnection();
    const payer = this.provider.getSigner();
    const destination = new web3.PublicKey(to);
    const transactionSignature = await token.transfer(connection, payer, payer.publicKey, destination, payer.publicKey, amount);
    return transactionSignature;
  }
}
