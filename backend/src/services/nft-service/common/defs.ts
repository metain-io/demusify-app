export enum NETWORK_STAGE {
  MAINNET = 'mainnet',
  TESTNET = 'testnet'
}

export interface AccountProviderInterface {
  getConnection (): any;
  getSigner(): any;
}

export interface NFTServiceInterface {
  mintNFT(data: any): Promise<any>;
  transfer(to: string, amount: number): Promise<any>;
}
