import { Types } from 'mongoose';

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

export interface CommonCharacterCurrencyParams {
  currencyId: CurrencyId;
  amount: number;
}

export interface CharacterCurrencyBackend extends CommonCharacterCurrencyParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface CharacterCurrencyFrontend extends CommonCharacterCurrencyParams {
  characterCurrencyId: string;
  characterId: string;
  currency?: Currency;
}