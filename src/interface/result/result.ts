import { Types } from "mongoose";
import { IRewardSchema, RewardCurrency, RewardItem } from "../reward/reward";

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

export interface ResultBackend extends CommonResultParams {}

export interface ResultFrontend extends CommonResultParams {
  characterId: string;
}

export interface ResultCombat {
  log: string;
  playerWon: boolean;
}

export interface ResultReward {
  currencies: RewardCurrency[];
  items: RewardItem[];
  experience: number;
}

// Probably not needed
/* export interface ResultCharacter {
  characterId: Types.ObjectId;
  name: string;
  level: string;
  experience: {
    current: number;
    max: number;
  };
  attributes: Types.ObjectId[];
  currencies: Types.ObjectId[];
  equipment: Types.ObjectId[];
}

export interface ResultAdventure {
  adventureId: number;
  name: string;
  adventureLevel: number;
  timeInSeconds: number;
  type: AdventureTypes;
  rewards: AdventureReward[];
  enemies: number[];
} */
