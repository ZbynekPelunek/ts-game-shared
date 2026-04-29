import type { ParamsDictionary } from 'express-serve-static-core';

export interface GetCharacterStatsRequestParams extends ParamsDictionary {
  characterId: string;
}
