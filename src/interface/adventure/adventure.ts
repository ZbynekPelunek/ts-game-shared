import { Reward } from '../reward/reward';

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
  rewardId: number | Reward;
  amount: number;
}

export enum AdventureTypes {
  TUTORIAL = 'Tutorial',
  COMMON = 'Common',
}
