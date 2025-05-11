import { ParsedQs } from 'qs';
import { ParamsDictionary } from 'express-serve-static-core';

import { CharacterCurrency } from './characterCurrency';
import { CurrencyId } from '../../currency/currency';
import { CommonErrorResponse } from '../../API/commonResponse';

export interface CharacterCurrencyDTO
  extends Pick<CharacterCurrency, 'amount' | 'currencyId' | 'currency'> {
  readonly _id: string;
}

//LIST
export interface ListCharacterCurrenciesQuery extends ParsedQs {
  characterId?: string;
  currencyId?: CurrencyId;
  populateCurrency?: string;
}

export interface ListCharacterCurrenciesResponseDTO
  extends Pick<
    CharacterCurrencyDTO,
    '_id' | 'amount' | 'currencyId' | 'currency'
  > {}

export type ListCharacterCurrenciesResponse =
  | { success: true; characterCurrencies: ListCharacterCurrenciesResponseDTO[] }
  | CommonErrorResponse;

//CREATE
export interface CreateCharacterCurrencyRequestDTO
  extends Pick<CharacterCurrencyDTO, 'amount' | 'currencyId'> {
  characterId: string;
}

export interface CreateCharacterCurrencyResponseDTO
  extends Pick<CharacterCurrencyDTO, 'amount' | 'currencyId'> {}

export type CreateCharacterCurrencyResponse =
  | { success: true; characterCurrency: CreateCharacterCurrencyResponseDTO }
  | CommonErrorResponse;

//UPDATE
export interface UpdateCharacterCurrencyRequestParams extends ParamsDictionary {
  characterCurrencyId: string;
}

export interface UpdateCharacterCurrencyRequestDTO
  extends Pick<CharacterCurrencyDTO, 'amount'> {}

export interface UpdateCharacterCurrencyResponseDTO
  extends Pick<CharacterCurrencyDTO, 'amount' | 'currencyId'> {}

export type UpdateCharacterCurrencyResponse =
  | { success: true; characterCurrency: CreateCharacterCurrencyResponseDTO }
  | CommonErrorResponse;
