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

export interface CancelResultRequestParams extends ParamsDictionary {
  resultId: string;
}

export interface SkipResultRequestParams extends ParamsDictionary {
  resultId: string;
}

export interface FinishResultRequestParams extends ParamsDictionary {
  resultId: string;
}

export interface CollectRewardRequestParams extends ParamsDictionary {
  resultId: string;
}

export interface CreateResultRequestBody {
  //characterId: string;
  adventureId: number;
}
