import { ParamsDictionary } from 'express-serve-static-core';
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

export interface ListCharactersResponse {
  characters: ListCharactersResponseDTO[];
}

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

export interface GetCharacterResponse {
  character: GetCharacterResponseDTO;
}

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

export interface CreateCharacterResponse {
  character: CreateCharacterResponseDTO;
}

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

export interface UpdateCharacterResponse {
  character: UpdateCharacterResponseDTO;
}

//DELETE
export interface DeleteCharacterRequestParams extends ParamsDictionary {
  characterId: string;
}

export type DeleteCharacterResponse = {};
