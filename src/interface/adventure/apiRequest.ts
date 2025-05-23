import type { ParamsDictionary } from 'express-serve-static-core';

import { CommonListRequestQuery } from '../API/commonRequest';
import { AdventureTypes } from './adventure';

export interface ListAdventuresRequestQuery extends CommonListRequestQuery {
  adventureId?: string;
  populateReward?: string;
  adventureLevel?: string;
  type?: AdventureTypes;
}

export interface GetAdventureRequestParams extends ParamsDictionary {
  adventureId: string;
}
