export enum CurrencyId {
  GOLD = 'GOLD',
  CHEATING_CURRENCY = 'CHEATING CURRENCY',
}

export interface Currency {
  _id: CurrencyId;
  name: string;
  label: string;
  desc?: string;
  cap?: number;
}
