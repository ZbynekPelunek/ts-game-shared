import type { ParamsDictionary } from 'express-serve-static-core';
import { Enemy, EnemyAttributes } from './enemy';

export interface GetEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}

export interface CreateEnemyRequestDTO extends Pick<Enemy, '_id' | 'name' | 'type' | 'attributes' | 'effects' | 'enemyLevel' | 'isLive'> {
}

export interface UpdateEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}

export interface UpdateEnemyRequestDTO extends Partial<Pick<Enemy, 'name' | 'type' | 'effects' | 'enemyLevel' | 'isLive'>> {
  attributes?: Partial<EnemyAttributes>;
}

export interface DeleteEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}
