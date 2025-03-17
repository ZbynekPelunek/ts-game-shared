import {
  Common_Response_Error,
  Common_Response_Success,
} from '../../API/commonResponse';
import { CharacterCurrencyFrontend } from './characterCurrency';

export interface ListCharacterCurrencies extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface CreateCharacterCurrencies extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface UpdateCharacterCurrency extends Common_Response_Success {
  characterCurrency: CharacterCurrencyFrontend;
}

export type CreateCharacterCurrenciesResponse =
  | CreateCharacterCurrencies
  | Common_Response_Error;
export type ListCharacterCurrenciesResponse =
  | ListCharacterCurrencies
  | Common_Response_Error;
export type UpdateCharacterCurrencyResponse =
  | UpdateCharacterCurrency
  | Common_Response_Error;
