import { ParamsDictionary } from 'express-serve-static-core';

import { Adventure, AdventureReward, AdventureTypes } from './adventure';

//CREATE
export interface CreateAdventureRequestDTO {
  _id: number;
  name: string;
  adventureLevel: number;
  timeInSeconds: number;
  type: AdventureTypes;
  rewards: [AdventureReward, ...AdventureReward[]];
  enemyIds?: number[];
  requiredLevel?: number;
}

export interface CreateAdventureResponseDTO extends Pick<Adventure, '_id' | 'name' | 'adventureLevel' | 'type'> {}

export interface CreateAdventureResponse {
  adventure: CreateAdventureResponseDTO;
}

//UPDATE
export interface UpdateAdventureRequestParams extends ParamsDictionary {
  adventureId: string;
}

export interface UpdateAdventureRequestDTO
  extends Partial<
    Pick<Adventure, 'name' | 'adventureLevel' | 'timeInSeconds' | 'type' | 'rewards' | 'enemyIds' | 'requiredLevel'>
  > {}

export interface UpdateAdventureResponseDTO
  extends Pick<Adventure, '_id' | 'name' | 'adventureLevel' | 'type' | 'timeInSeconds' | 'rewards'> {}

export interface UpdateAdventureResponse {
  adventure: UpdateAdventureResponseDTO;
}

//DELETE
export interface DeleteAdventureRequestParams extends ParamsDictionary {
  adventureId: string;
}

export type DeleteAdventureResponse = {};
