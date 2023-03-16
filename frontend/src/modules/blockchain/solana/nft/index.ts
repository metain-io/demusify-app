import { DemusifyMintOptsType } from "@modules/blockchain/defs";
import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

export type NFTModuleOpts = {
  connection: web3.Connection;
};

export class NFTModule {
  private connection: web3.Connection;

  constructor (opts: NFTModuleOpts) {
    this.connection = opts.connection;
  }

  public async mintNFT (opts: DemusifyMintOptsType): Promise<void> {
    const conn = this.connection;

    const tokenMint = await token.createMint(conn, payer, mintAuthority, freezeAuthority, decimals);

  }
}

