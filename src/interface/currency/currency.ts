export enum CurrencyId {
  GOLD,
  CHEATING_CURRENCY
}

export interface Currency {
  _id: CurrencyId;
  name: string;
  label: string;
  desc?: string;
  cap?: number;
}
