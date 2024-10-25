import { RequireAtLeastOne } from "../../type/atLeastOne";
import { Currency } from "../currency/currency";
import { CommonItemsEquipmenParams } from "../item/Equipment";

type RewardBasicParams = {
  _id: number;
};

type PossibleReward = {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
};

export interface RewardCurrency {
  currencyId: number | Currency;
  amount: number;
}

export interface RewardItem {
  itemId: number | CommonItemsEquipmenParams;
  amount: number;
}

export interface IRewardSchema extends RewardBasicParams, PossibleReward {}
export type Reward = RewardBasicParams & RequireAtLeastOne<PossibleReward>;
