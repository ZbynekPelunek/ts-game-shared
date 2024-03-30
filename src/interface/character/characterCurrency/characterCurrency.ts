import { Types } from 'mongoose';

import { CurrencyId, Currency } from '../../currency/currency';

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