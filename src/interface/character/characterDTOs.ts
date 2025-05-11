import { ParamsDictionary } from 'express-serve-static-core';
import { CommonErrorResponse } from '../API/commonResponse';
import { Character } from './character';
import { CommonListRequestQuery } from '../API/commonRequest';

export interface CharacterDTO
  extends Pick<
    Character,
    | 'name'
    | 'level'
    | 'characterClass'
    | 'race'
    | 'currentExperience'
    | 'maxExperience'
  > {
  readonly _id: string;
}

//LIST
export interface ListCharactersRequestQuery extends CommonListRequestQuery {
  accountId?: string;
}

export interface ListCharactersResponseDTO
  extends Pick<
    CharacterDTO,
    | '_id'
    | 'name'
    | 'level'
    | 'characterClass'
    | 'race'
    | 'currentExperience'
    | 'maxExperience'
  > {}

export type ListCharactersResponse =
  | { success: true; characters: ListCharactersResponseDTO[] }
  | CommonErrorResponse;

//GET ONE
export interface GetCharacterRequestParams extends ParamsDictionary {
  characterId: string;
}

export interface GetCharacterResponseDTO
  extends Pick<
    CharacterDTO,
    | '_id'
    | 'name'
    | 'level'
    | 'characterClass'
    | 'race'
    | 'currentExperience'
    | 'maxExperience'
  > {}

export type GetCharacterResponse =
  | { success: true; character: GetCharacterResponseDTO }
  | CommonErrorResponse;

//CREATE
export interface CreateCharacterRequestDTO
  extends Pick<CharacterDTO, 'name' | 'characterClass' | 'race'> {}

export interface CreateCharacterResponseDTO
  extends Pick<
    CharacterDTO,
    | '_id'
    | 'name'
    | 'level'
    | 'characterClass'
    | 'race'
    | 'currentExperience'
    | 'maxExperience'
  > {}

export type CreateCharacterResponse =
  | { success: true; character: CreateCharacterResponseDTO }
  | CommonErrorResponse;

//UPDATE
export interface UpdateCharacterRequestParams extends ParamsDictionary {
  characterId: string;
}

export interface UpdateCharacterRequestDTO
  extends Partial<Pick<CharacterDTO, 'name'>> {
  experience: number;
}

export interface UpdateCharacterResponseDTO
  extends Pick<
    CharacterDTO,
    | '_id'
    | 'name'
    | 'level'
    | 'characterClass'
    | 'race'
    | 'currentExperience'
    | 'maxExperience'
  > {}

export type UpdateCharacterResponse =
  | {
      success: true;
      character: UpdateCharacterResponseDTO;
    }
  | CommonErrorResponse;

//DELETE
export interface DeleteCharacterRequestParams extends ParamsDictionary {
  characterId: string;
}

export type DeleteCharacterResponse = { success: true } | CommonErrorResponse;
