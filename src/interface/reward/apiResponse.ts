import { Reward } from './reward';
import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';

export interface Reward_GET_all extends Common_Response_Success {
  rewards: Reward[];
}

export interface Reward_GET_one extends Common_Response_Success {
  reward: Reward;
}

export type Response_Reward_GET_all = Reward_GET_all | Common_Response_Error;
export type Response_Reward_GET_one = Reward_GET_one | Common_Response_Error;