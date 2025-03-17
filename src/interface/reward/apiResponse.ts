import { RewardDTO } from './reward';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';

export interface ListRewards extends Common_Response_Success {
  rewards: RewardDTO[];
}

export interface GetReward extends Common_Response_Success {
  reward: RewardDTO;
}

export type ListRewardsResponse = ListRewards | Common_Response_Error;
export type GetRewardResponse = GetReward | Common_Response_Error;
