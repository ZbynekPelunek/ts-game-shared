export enum CurrencyId {
  GOLD = 'GOLD',
  CHEATING_CURRENCY = 'CHEATING_CURRENCY',
}

export interface Currency {
  _id: CurrencyId;
  label: string;
  desc?: string;
  cap?: number;
}
