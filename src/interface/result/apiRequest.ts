import type { ParamsDictionary } from 'express-serve-static-core';

import { CommonListRequestQuery } from '../API/commonRequest';
import { ResultState } from './result';

export interface ListResultsRequestQuery extends CommonListRequestQuery {
  characterId?: string;
  state?: ResultState | ResultState[];
}

export interface GetResultRequestParams extends ParamsDictionary {
  resultId: string;
}

export interface CreateResultRequestBody {
  //characterId: string;
  adventureId: number;
}
