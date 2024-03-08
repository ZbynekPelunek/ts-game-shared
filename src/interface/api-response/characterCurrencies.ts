import { CharacterCurrencyFrontend } from '../character/currencies.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface CharacterCurrencies_GET_all extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export interface CharacterCurrencies_POST extends Common_Response_Success {
  characterCurrencies: CharacterCurrencyFrontend[];
}

export type Response_CharacterCurrencies_POST = CharacterCurrencies_POST | Common_Response_Error;
export type Response_CharacterCurrencies_GET_all = CharacterCurrencies_GET_all | Common_Response_Error;