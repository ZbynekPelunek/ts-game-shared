import { Types } from 'mongoose';

export interface CommonResultParams {
  adventureId: number;
  timeStart: string;
  timeFinish: string;
  combat?: ResultCombat | null;
}

export interface ResultBackend extends CommonResultParams {
  characterId: Types.ObjectId;
}

export interface ResultFrontend extends CommonResultParams {
  characterId: string;
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