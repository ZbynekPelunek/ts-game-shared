import { CommonItemParams } from './item';
import { CommonItemsEquipmenParams } from './Equipment';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';

export interface ListItems extends CommonSuccessResponse {
  items: CommonItemParams[] | CommonItemsEquipmenParams[];
}

export interface GetItem extends CommonSuccessResponse {
  item: CommonItemParams | CommonItemsEquipmenParams;
}

export type ListItemsResponse = ListItems | CommonErrorResponse;
export type GetItemResponse = GetItem | CommonErrorResponse;
