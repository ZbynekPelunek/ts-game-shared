import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../../API/commonResponse';
import { CharacterCurrencyFrontend } from './characterCurrency';

export interface ListCharacterCurrencies extends CommonSuccessResponse {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface CreateCharacterCurrencies extends CommonSuccessResponse {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface UpdateCharacterCurrency extends CommonSuccessResponse {
  characterCurrency: CharacterCurrencyFrontend;
}

export type CreateCharacterCurrenciesResponse =
  | CreateCharacterCurrencies
  | CommonErrorResponse;
export type ListCharacterCurrenciesResponse =
  | ListCharacterCurrencies
  | CommonErrorResponse;
export type UpdateCharacterCurrencyResponse =
  | UpdateCharacterCurrency
  | CommonErrorResponse;
