import type { ParamsDictionary } from 'express-serve-static-core';

export interface GetRewardRequestParams extends ParamsDictionary {
  rewardId: string;
}
