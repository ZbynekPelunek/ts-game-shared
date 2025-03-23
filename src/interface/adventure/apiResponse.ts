import { Adventure } from './adventure';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';

export interface ListAdventures extends CommonSuccessResponse {
  adventures: Adventure[];
}

export interface GetAdventure extends CommonSuccessResponse {
  adventure: Adventure;
}

export type ListAdventuresResponse = ListAdventures | CommonErrorResponse;
export type GetAdventureResponse = GetAdventure | CommonErrorResponse;
