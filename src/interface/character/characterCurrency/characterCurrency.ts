import { Types } from 'mongoose';

import { CurrencyId } from '../../currency/currency';
import { CurrencyDTO } from '../../currency/currencyDTOs';

export interface CommonCharacterCurrencyParams {
  currencyId: CurrencyId | CurrencyDTO;
  amount: number;
}

export interface CharacterCurrencyBackend
  extends CommonCharacterCurrencyParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface CharacterCurrencyFrontend
  extends CommonCharacterCurrencyParams {
  _id: string;
  characterId: string;
}
