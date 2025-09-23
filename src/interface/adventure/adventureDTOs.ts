import { ParamsDictionary } from 'express-serve-static-core';

import { CommonErrorResponse } from '../API/commonResponse';
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

export type CreateAdventureResponse =
  | { success: true; adventure: CreateAdventureResponseDTO }
  | CommonErrorResponse;

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

export type UpdateAdventureResponse =
  | {
      success: true;
      adventure: UpdateAdventureResponseDTO;
    }
  | CommonErrorResponse;

//DELETE
export interface DeleteAdventureRequestParams extends ParamsDictionary {
  adventureId: string;
}

export type DeleteAdventureResponse = { success: true } | CommonErrorResponse;
