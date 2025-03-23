import { RewardDTO } from './reward';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';

export interface ListRewards extends CommonSuccessResponse {
  rewards: RewardDTO[];
}

export interface GetReward extends CommonSuccessResponse {
  reward: RewardDTO;
}

export type ListRewardsResponse = ListRewards | CommonErrorResponse;
export type GetRewardResponse = GetReward | CommonErrorResponse;
