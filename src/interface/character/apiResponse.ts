import { CharacterFrontend } from './character';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';

export interface ListCharacters extends Common_Response_Success {
  characters: CharacterFrontend[];
}

export interface GetCharacter extends Common_Response_Success {
  character: CharacterFrontend;
}

export interface CreateCharacter extends Common_Response_Success {
  character: CharacterFrontend;
}

export type ListCharactersResponse = ListCharacters | Common_Response_Error;
export type GetCharacterResponse = GetCharacter | Common_Response_Error;
export type CreateCharacterResponse = CreateCharacter | Common_Response_Error;
