import { Common_Response_Error, Common_Response_Success } from '../../API/commonResponse';
import { CharacterCurrencyFrontend } from './characterCurrency';

export interface CharacterCurrency_GET_all extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface CharacterCurrency_POST extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface CharacterCurrency_PATCH extends Common_Response_Success {
  characterCurrency: CharacterCurrencyFrontend;
}

export type Response_CharacterCurrency_POST = CharacterCurrency_POST | Common_Response_Error;
export type Response_CharacterCurrency_GET_all = CharacterCurrency_GET_all | Common_Response_Error;
export type Response_CharacterCurrency_PATCH = CharacterCurrency_PATCH | Common_Response_Error;