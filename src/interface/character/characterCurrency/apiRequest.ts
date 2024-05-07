import { CurrencyId } from '../../currency/currency';
import { CharacterCurrencyFrontend } from './characterCurrency';

export interface Request_CharacterCurrency_GET_all_query {
  characterId?: string;
  currencyId?: CurrencyId;
  populateCurrency?: boolean;
}

export interface Request_CharacterCurrency_POST_body {
  characterCurrencies: Omit<CharacterCurrencyFrontend, '_id'> | Omit<CharacterCurrencyFrontend, '_id'>[];
}

export interface Request_CharacterCurrency_PATCH_param {
  characterCurrencyId: string;
}

export interface Request_CharacterCurrency_PATCH_body {
  amount: number;
}