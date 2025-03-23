import { CharacterFrontend } from './character';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';

export interface ListCharacters extends CommonSuccessResponse {
  characters: CharacterFrontend[];
}

export interface GetCharacter extends CommonSuccessResponse {
  character: CharacterFrontend;
}

export interface CreateCharacter extends CommonSuccessResponse {
  character: CharacterFrontend;
}

export type ListCharactersResponse = ListCharacters | CommonErrorResponse;
export type GetCharacterResponse = GetCharacter | CommonErrorResponse;
export type CreateCharacterResponse = CreateCharacter | CommonErrorResponse;
