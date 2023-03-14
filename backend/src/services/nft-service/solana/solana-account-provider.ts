import * as web3 from "@solana/web3.js";

import base58 from "bs58";
import { AccountProviderInterface, NETWORK_STAGE } from "../common/defs";

export class SolanaAccountProvider implements AccountProviderInterface {
  private connection: web3.Connection;
  private signer: web3.Keypair;

  constructor (network: string, masterKey: string) {
    switch (network) {
      case NETWORK_STAGE.MAINNET:
        this.connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));
        break;

      default:
        this.connection = new web3.Connection(web3.clusterApiUrl("devnet"));
      break;
    }

    const secretKey = base58.decode(masterKey);
    this.signer = web3.Keypair.fromSecretKey(secretKey);
  }

  public getConnection (): web3.Connection {
    return this.connection;
  }

  public getSigner(): web3.Keypair {
    return this.signer;
  }
}
