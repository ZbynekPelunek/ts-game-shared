import { CharacterAttributeFrontend } from './characterAttribute';

export interface Request_CharacterAttribute_GET_all_query {
  characterId?: string;
  populateAttribute?: boolean;
}

export interface Request_CharacterAttribute_POST_body {
  characterAttributes: CharacterAttributeFrontend | CharacterAttributeFrontend[];
}
