import type { ParamsDictionary } from 'express-serve-static-core';

export interface GetEnemyRequestParams extends ParamsDictionary {
  enemyId: string;
}
