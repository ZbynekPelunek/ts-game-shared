import { CommonItemParams } from '../item.interface';
import { CommonItemsEquipmenParams } from '../itemsEquipment';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface Items_GET_all extends Common_Response_Success {
  items: CommonItemParams[] | CommonItemsEquipmenParams[];
}

export interface Items_GET_one extends Common_Response_Success {
  item: CommonItemParams | CommonItemsEquipmenParams | null;
}

export type Response_Items_GET_all = Items_GET_all | Common_Response_Error;
export type Response_Items_GET_one = Items_GET_one | Common_Response_Error;