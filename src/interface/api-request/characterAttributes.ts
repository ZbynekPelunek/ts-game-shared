import { CharacterAttributeFrontend } from '../character/attributes.interface';

export interface Request_CharacterAttributes_GET_all_query {
  characterId: string;
  populateAttribute: boolean;
}

export interface Request_CharacterAttributes_POST_body {
  characterAttributes: CharacterAttributeFrontend | CharacterAttributeFrontend[];
}
