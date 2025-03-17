import { ParsedQs } from 'qs';
import type { ParamsDictionary } from 'express-serve-static-core';

import { CurrencyId } from '../../currency/currency';
import { CharacterCurrencyFrontend } from './characterCurrency';

export interface ListCharacterCurrenciesQuery extends ParsedQs {
  characterId?: string;
  currencyId?: CurrencyId;
  populateCurrency?: string;
}

export interface CreateCharacterCurrencyRequestBody {
  characterCurrencies:
    | Pick<CharacterCurrencyFrontend, 'amount' | 'characterId' | 'currencyId'>
    | Pick<
        CharacterCurrencyFrontend,
        'amount' | 'characterId' | 'currencyId'
      >[];
}

export interface UpdateCharacterCurrencyRequestParams extends ParamsDictionary {
  characterCurrencyId: string;
}

export interface UpdateCharacterCurrencyRequestBody {
  amount: number;
}
