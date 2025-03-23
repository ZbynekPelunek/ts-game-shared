import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';
import { EnemyDTO } from './enemy';

export interface ListEnemies extends CommonSuccessResponse {
  enemies: EnemyDTO[];
}

export interface GetEnemy extends CommonSuccessResponse {
  enemy: EnemyDTO;
}

export type ListEnemiesResponse = ListEnemies | CommonErrorResponse;
export type GetEnemyResponse = GetEnemy | CommonErrorResponse;
