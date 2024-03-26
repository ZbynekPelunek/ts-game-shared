import { RequireAtLeastOne } from '../../type/atLeastOne';

type RewardBasicParams = {
  _id: number;
}

type PossibleRewards = {
  currencies?: [number, ...number[]];
  experience?: number;
  items?: [number, ...number[]];
}

export interface IRewardSchema extends RewardBasicParams, PossibleRewards { };
export type Reward = RewardBasicParams & RequireAtLeastOne<PossibleRewards>;
