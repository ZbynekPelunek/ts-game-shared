import { CharacterCurrencyFrontend } from './characterCurrency';

export interface Request_CharacterCurrency_GET_all_query {
  characterId: string;
  populateCurrency: boolean;
}

export interface Request_CharacterCurrency_POST_body {
  characterCurrencies: CharacterCurrencyFrontend | CharacterCurrencyFrontend[];
}