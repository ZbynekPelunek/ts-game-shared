import { CommonItemParams } from './item';
import { CommonItemsEquipmenParams } from './Equipment';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';

export interface ListItems extends Common_Response_Success {
  items: CommonItemParams[] | CommonItemsEquipmenParams[];
}

export interface GetItem extends Common_Response_Success {
  item: CommonItemParams | CommonItemsEquipmenParams;
}

export type ListItemsResponse = ListItems | Common_Response_Error;
export type GetItemResponse = GetItem | Common_Response_Error;
