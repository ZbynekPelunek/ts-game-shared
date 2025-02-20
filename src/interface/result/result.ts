import { Types } from 'mongoose';
import { RewardCurrency, RewardItem } from '../reward/reward';

export interface CommonResultParams {
  adventureId: number;
  adventureName: string;
  timeStart: string;
  timeFinish: string;
  inProgress: boolean;
  rewardCollected: boolean;
  reward: ResultReward;
  combat?: ResultCombat | null;
  characterId: Types.ObjectId | string;
}

export interface ResultBackend extends CommonResultParams {
  _id?: Types.ObjectId;
}

export interface ResultFrontend extends CommonResultParams {
  characterId: string;
  _id: string;
}

export type ResultDTO = Pick<
  CommonResultParams,
  'timeFinish' | 'timeStart' | 'reward'
> & {
  resultId: string;
};

export interface ResultCombat {
  log: string;
  playerWon: boolean;
}

export interface ResultReward {
  currencies: RewardCurrency[];
  items: RewardItem[];
  experience: number;
}
