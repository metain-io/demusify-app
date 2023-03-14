import { NFTServiceInterface } from "./common/defs";
import { NFTSolana } from "./solana/nft-solana";
import { SolanaAccountProvider } from "./solana/solana-account-provider";

function createService (data: any): NFTServiceInterface {
  // TODO: fix hard-code
  const provider = new SolanaAccountProvider("devnet", "TEST_WALLET_PRIVATE_KEY");
  const service = new NFTSolana(provider);
  return service;
}

export class NFTService {
  async createItem(requesterUserWallet: string, data: NFTService): Promise<any> {
    const service = createService(data);
    const mintResult = await service.mintNFT(data);

    // Send first token to music creator, this is the Master License
    await service.transfer(requesterUserWallet, 1);

    return mintResult;
  }
}
