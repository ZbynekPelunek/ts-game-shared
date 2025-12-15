import { CurrencyId } from '../currency/currency';
import { CurrencyDTO } from '../currency/currencyDTOs';
import { CommonItemParams } from '../item/item';

export interface Adventure {
  _id: number;
  name: string;
  adventureLevel: number;
  timeInSeconds: number;
  type: AdventureTypes;
  rewards: [AdventureReward, ...AdventureReward[]];
  enemyIds?: number[];
  requiredLevel?: number;
}

export interface AdventureReward {
  currencies?: [RewardCurrency, ...RewardCurrency[]];
  items?: [RewardItem, ...RewardItem[]];
  experience?: number;
}

export interface RewardCurrency {
  currencyId: CurrencyId | CurrencyDTO;
  amount: number;
}

export interface RewardItem {
  itemId: number | CommonItemParams;
  amount: number;
}

export enum AdventureTypes {
  TUTORIAL = 'Tutorial',
  COMMON = 'Common',
}
