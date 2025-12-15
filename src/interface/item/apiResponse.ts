import { CommonItemParams } from './item';
import { Equipment } from './Equipment';
import {
  CommonErrorResponse,
  CommonSuccessResponse
} from '../API/commonResponse';

export interface ListItems extends CommonSuccessResponse {
  items: CommonItemParams[];
}

export interface ListItemsInternal {
  items: CommonItemParams[];
}

export interface GetItem extends CommonSuccessResponse {
  item: CommonItemParams;
}

export interface GetItemInternal {
  item: CommonItemParams;
}

export type ListItemsResponse = ListItems | CommonErrorResponse;
export type ListItemsInternalResponse = ListItemsInternal | CommonErrorResponse;
export type GetItemResponse = GetItem | CommonErrorResponse;
export type GetItemInternalResponse = GetItemInternal | CommonErrorResponse;
