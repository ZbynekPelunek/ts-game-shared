export interface Currency {
  currencyId: number;
  name: string;
  label: string;
  amount: number;
  cap?: number;
}