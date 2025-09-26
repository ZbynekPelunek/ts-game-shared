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

export interface CreateReward extends CommonSuccessResponse {
  reward: RewardDTO;
}

export interface UpdateReward extends CommonSuccessResponse {
  reward: RewardDTO;
}

export interface DeleteReward extends CommonSuccessResponse {}

export type ListRewardsResponse = ListRewards | CommonErrorResponse;
export type GetRewardResponse = GetReward | CommonErrorResponse;
export type CreateRewardResponse = CreateReward | CommonErrorResponse;
export type UpdateRewardResponse = UpdateReward | CommonErrorResponse;
export type DeleteRewardResponse = DeleteReward | CommonErrorResponse;
