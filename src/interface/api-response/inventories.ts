import { InventoryFrontend } from '../character/inventories.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface Inventories_GET_one extends Common_Response_Success {
  inventory: InventoryFrontend;
}

export interface Inventories_POST extends Common_Response_Success {
  inventory: {
    inventoryId: string;
  };
}

export type Response_Inventories_POST = Inventories_POST | Common_Response_Error;
export type Response_Inventories_GET_one = Inventories_GET_one | Common_Response_Error;