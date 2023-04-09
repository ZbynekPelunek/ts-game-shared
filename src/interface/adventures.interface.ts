import { Currencies } from './character/character.interface';
import { InventoryItem } from './item.interface';

export interface IAdventure {
  adventureId: string;
  name: string;
  level: number;
  timeInSeconds: number;
  adventureState: AdventureState;
  reward: {
    experience: number;
    items?: InventoryItem[];
    currencies?: Currencies
  };
  resultId?: string;
  timer?: AdventureTimer;
  requiredLevel?: number;
}

export enum AdventureState {
  IDLE = 'IDLE',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED'
}

export interface AdventureResult {
  resultId: string;
  adventureId: string;
  characterId: string;
  playerWon: boolean;
  log: string;
}

export type AdventureTimer = {
  timeStarted: string;
  timeFinished: string;
  progressPercent?: number;
  timeLeft?: number;
  intervalId?: unknown;
}

export enum AdventureActions {
  START = 'START',
  CANCEL = 'CANCEL',
  FINISH = 'FINISH'
}
