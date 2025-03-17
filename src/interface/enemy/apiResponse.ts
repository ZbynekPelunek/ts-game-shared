import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';
import { EnemyDTO } from './enemy';

export interface ListEnemies extends Common_Response_Success {
  enemies: EnemyDTO[];
}

export interface GetEnemy extends Common_Response_Success {
  enemy: EnemyDTO;
}

export type ListEnemiesResponse = ListEnemies | Common_Response_Error;
export type GetEnemyResponse = GetEnemy | Common_Response_Error;
