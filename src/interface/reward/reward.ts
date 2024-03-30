import { RequireAtLeastOne } from '../../type/atLeastOne';

type RewardBasicParams = {
  _id: number;
}

type PossibleReward = {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
}

export interface RewardCurrency {
  currencyId: number;
  amount: number;
}

export interface RewardItem {
  itemId: number;
  amount: number;
}

export interface IRewardSchema extends RewardBasicParams, PossibleReward { };
export type Reward = RewardBasicParams & RequireAtLeastOne<PossibleReward>;
