export enum CurrencyId {
  GOLD,
  CHEATING_CURRENCY
}

export interface Currency {
  currencyId: CurrencyId;
  name: string;
  label: string;
  amount: number;
  cap?: number;
}