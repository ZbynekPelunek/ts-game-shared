import { CommonItemParams } from './item';
import { CommonItemsEquipmentParams } from './Equipment';
import {
  CommonErrorResponse,
  CommonSuccessResponse
} from '../API/commonResponse';

export interface ListItems extends CommonSuccessResponse {
  items: CommonItemParams[] | CommonItemsEquipmentParams[];
}

export interface ListItemsInternal {
  items: CommonItemParams[] | CommonItemsEquipmentParams[];
}

export interface GetItem extends CommonSuccessResponse {
  item: CommonItemParams | CommonItemsEquipmentParams;
}

export interface GetItemInternal {
  item: CommonItemParams | CommonItemsEquipmentParams;
}

export type ListItemsResponse = ListItems | CommonErrorResponse;
export type ListItemsInternalResponse = ListItemsInternal | CommonErrorResponse;
export type GetItemResponse = GetItem | CommonErrorResponse;
export type GetItemInternalResponse = GetItemInternal | CommonErrorResponse;