export type DemusifyLicensePriceType = {
  name: string;
  price: number;
  currency: string;
};

export type DemusifyMintOptsType = {
  name: string;
  musicBPM: number;
  musicKey: string;
  licenses: DemusifyLicensePriceType[];
};
