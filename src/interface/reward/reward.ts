import { Document } from 'mongoose';
import { RequireAtLeastOne } from '../../type/atLeastOne';
import { CurrencyId } from '../currency/currency';
import { CommonItemsEquipmenParams } from '../item/Equipment';
import { CurrencyDTO } from '../currency/currencyDTOs';

type RewardBasicParams = { _id: number };

type PossibleReward = {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
};

export interface RewardCurrency {
  currencyId: CurrencyId | CurrencyDTO;
  amount: number;
}

export interface RewardItem {
  itemId: number | CommonItemsEquipmenParams;
  amount: number;
}

export interface RewardMongooseSchema
  extends RewardBasicParams,
    PossibleReward {}

export interface RewardDocument
  extends RewardMongooseSchema,
    Document<number> {}

export type Reward = RewardBasicParams & RequireAtLeastOne<PossibleReward>;

export interface RewardDTO
  extends Pick<Reward, '_id' | 'currencies' | 'experience' | 'items'> {}
