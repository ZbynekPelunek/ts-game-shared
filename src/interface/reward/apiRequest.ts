import type { ParamsDictionary } from 'express-serve-static-core';
import { RewardCurrency, RewardItem } from './reward';

export interface GetRewardRequestParams extends ParamsDictionary {
  rewardId: string;
}

export interface CreateRewardRequestDTO {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
}

export interface UpdateRewardRequestParams extends ParamsDictionary {
  rewardId: string;
}

export interface UpdateRewardRequestDTO {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
}

export interface DeleteRewardRequestParams extends ParamsDictionary {
  rewardId: string;
}
