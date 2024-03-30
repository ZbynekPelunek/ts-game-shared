import { CommonItemParams } from './item';
import { CommonItemsEquipmenParams } from './Equipment';
import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';

export interface Item_GET_all extends Common_Response_Success {
  items: CommonItemParams[] | CommonItemsEquipmenParams[];
}

export interface Item_GET_one extends Common_Response_Success {
  item: CommonItemParams | CommonItemsEquipmenParams;
}

export type Response_Item_GET_all = Item_GET_all | Common_Response_Error;
export type Response_Item_GET_one = Item_GET_one | Common_Response_Error;