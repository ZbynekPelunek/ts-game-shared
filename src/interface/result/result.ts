import { Types } from 'mongoose';

export interface Result {
  characterId: Types.ObjectId;
  adventureId: number;
  timeStart: string;
  timeFinish: string;
  combat?: ResultCombat | null;
}

export interface ResultCombat {
  log: string;
  playerWon: boolean;
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