import type { ParamsDictionary } from 'express-serve-static-core';
import { EnemyAttributes, EnemyTypes } from './enemy';

export interface GetEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}

export interface CreateEnemyRequestDTO {
  _id: number;
  name: string;
  type: EnemyTypes;
  attributes: EnemyAttributes;
  effects: number[];
}

export interface UpdateEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}

export interface UpdateEnemyRequestDTO {
  name?: string;
  type?: EnemyTypes;
  attributes?: Partial<EnemyAttributes>;
  effects?: number[];
}

export interface DeleteEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}
