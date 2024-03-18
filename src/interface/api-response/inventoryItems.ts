import { InventoryItemFrontend } from '../character/inventoryItems.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface InventoryItems_GET_all extends Common_Response_Success {
  inventoryItems: InventoryItemFrontend[];
}

export interface InventoryItems_GET_one extends Common_Response_Success {
  inventoryItem: InventoryItemFrontend;
}

export type Response_Inventories_GET_all = InventoryItems_GET_all | Common_Response_Error;
export type Response_Inventories_GET_one = InventoryItems_GET_one | Common_Response_Error;