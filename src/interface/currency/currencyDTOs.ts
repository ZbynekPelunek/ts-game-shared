import { ParamsDictionary } from 'express-serve-static-core';

import { CommonErrorResponse } from '../API/commonResponse';
import { Currency, CurrencyId } from './currency';

export interface CurrencyDTO
  extends Pick<Currency, '_id' | 'label' | 'desc' | 'cap'> {}

//LIST
export interface ListCurrenciesResponseDTO
  extends Pick<CurrencyDTO, '_id' | 'label' | 'cap' | 'desc'> {}

export type ListCurrenciesResponse =
  | {
      success: true;
      currencies: ListCurrenciesResponseDTO[];
    }
  | CommonErrorResponse;

//GET ONE
export interface GetCurrencyRequestParams extends ParamsDictionary {
  currencyId: CurrencyId;
}

export interface GetCurrencyResponseDTO extends Pick<CurrencyDTO, '_id'> {}

export type GetCurrencyResponse =
  | {
      success: true;
      currency: GetCurrencyResponseDTO;
    }
  | CommonErrorResponse;
