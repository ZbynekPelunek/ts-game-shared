import { Reward } from '../reward/reward';

export interface Adventure {
  adventureId: number;
  name: string;
  level: number;
  timeInSeconds: number;
  rewards: [AdventureReward, ...AdventureReward[]];
  enemyIds?: number[];
  requiredLevel?: number;
}

export interface AdventureReward {
  rewardId: number | Reward;
  amount: number;
}
// export enum AdventureState {
//   IDLE = 'IDLE',
//   IN_PROGRESS = 'IN_PROGRESS',
//   FINISHED = 'FINISHED'
// }

// export interface AdventureResult {
//   resultId: string;
//   adventureId: string;
//   characterId: string;
//   playerWon: boolean;
//   log: string;
// }

// export type AdventureTimer = {
//   timeStarted: string;
//   timeFinished: string;
//   progressPercent?: number;
//   timeLeft?: number;
//   intervalId?: unknown;
// }

// export enum AdventureActions {
//   START = 'START',
//   CANCEL = 'CANCEL',
//   FINISH = 'FINISH'
// }
