import { CharacterClass, CharacterRace } from './character';

export interface Request_Character_GET_all_query {
  accountId?: string;
}

export interface Request_Character_GET_one_params {
  characterId: string;
}

export interface Request_Character_GET_one_query {
  populateInventory: boolean;
}

export interface Request_Character_POST_body {
  accountId: string;
  name: string;
  race: CharacterRace;
  characterClass: CharacterClass;
}
