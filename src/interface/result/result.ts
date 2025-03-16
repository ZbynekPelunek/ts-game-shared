import { Types } from 'mongoose';
import { RewardCurrency, RewardItem } from '../reward/reward';

export interface CommonResultParams {
  adventureId: number;
  adventureName: string;
  timeStart: string;
  timeFinish: string;
  state: ResultState;
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

export enum ResultState {
  IN_PROGRESS = 'InProgress',
  CANCELED = 'Canceled',
  SKIPPED = 'Skipped',
  FINISHED = 'Finished',
  REWARD_COLLECTED = 'RewardCollected',
}

export enum ResultGetActions {
  CHECK_IN_PROGRESS = 'checkInProgress',
}

export enum ResultPatchActions {
  COLLECT_REWARD = 'collectReward',
  FINISH_RESULT = 'finishResult',
  CANCEL_ADVENTURE = 'cancelAdventure',
  SKIP_ADVENTURE = 'skipAdventure',
}
