import { ParamsDictionary } from 'express-serve-static-core';

import { CommonListRequestQuery } from '../API/commonRequest';
import { CharacterClass, CharacterRace } from './character';

export interface ListCharactersRequestQuery extends CommonListRequestQuery {
  accountId?: string;
}

export interface GetCharacterRequestParams extends ParamsDictionary {
  characterId: string;
}

export interface CreateCharacterRequestBody {
  accountId: string;
  name: string;
  race: CharacterRace;
  characterClass: CharacterClass;
}
