import { ParamsDictionary } from 'express-serve-static-core';

import { Currency, CurrencyId } from './currency';

export interface CurrencyDTO
  extends Pick<Currency, '_id' | 'label' | 'desc' | 'cap'> {}

//LIST
export interface ListCurrenciesResponseDTO
  extends Pick<CurrencyDTO, '_id' | 'label' | 'cap' | 'desc'> {}

export interface ListCurrenciesResponse {
  currencies: ListCurrenciesResponseDTO[];
}

//GET ONE
export interface GetCurrencyRequestParams extends ParamsDictionary {
  currencyId: CurrencyId;
}

export interface GetCurrencyResponseDTO
  extends Pick<CurrencyDTO, '_id' | 'cap' | 'desc' | 'label'> {}

export interface GetCurrencyResponse {
  currency: GetCurrencyResponseDTO;
}
