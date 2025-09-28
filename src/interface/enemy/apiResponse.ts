import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';
import { EnemyDTO, EnemyDTOInternal } from './enemy';

export interface ListEnemies extends CommonSuccessResponse {
  enemies: EnemyDTO[];
}

export interface GetEnemy extends CommonSuccessResponse {
  enemy: EnemyDTO;
}

export interface CreateEnemy extends CommonSuccessResponse {
  enemy: EnemyDTO;
}

export interface UpdateEnemy extends CommonSuccessResponse {
  enemy: EnemyDTO;
}

export interface DeleteEnemy extends CommonSuccessResponse {
  message: string;
}

// Internal response types (without success field)
export interface ListEnemiesInternal {
  enemies: EnemyDTOInternal[];
}

export interface GetEnemyInternal {
  enemy: EnemyDTOInternal;
}

export interface CreateEnemyInternal {
  enemy: EnemyDTOInternal;
}

export interface UpdateEnemyInternal {

}

export interface DeleteEnemyInternal {
}

export type ListEnemiesResponse = ListEnemies | CommonErrorResponse;
export type GetEnemyResponse = GetEnemy | CommonErrorResponse;
export type CreateEnemyResponse = CreateEnemy | CommonErrorResponse;
export type UpdateEnemyResponse = UpdateEnemy | CommonErrorResponse;
export type DeleteEnemyResponse = DeleteEnemy | CommonErrorResponse;

// Internal response types
export type ListEnemiesInternalResponse = ListEnemiesInternal | CommonErrorResponse;
export type GetEnemyInternalResponse = GetEnemyInternal | CommonErrorResponse;
export type CreateEnemyInternalResponse = CreateEnemyInternal | CommonErrorResponse;
export type UpdateEnemyInternalResponse = UpdateEnemyInternal | CommonErrorResponse;
export type DeleteEnemyInternalResponse = DeleteEnemyInternal | CommonErrorResponse;
