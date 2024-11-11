import { InventoryFrontend } from './inventory';
import { Common_Response_Error, Common_Response_Success } from '../../API/commonResponse';

export interface Inventory_GET_all extends Common_Response_Success {
  inventory: InventoryFrontend[];
}

export interface Inventory_GET_one extends Common_Response_Success {
  inventory: InventoryFrontend;
}

export interface Inventory_POST extends Common_Response_Success {
  inventory: InventoryFrontend[];
}

export interface Inventory_PATCH extends Common_Response_Success {

}

export interface Inventory_DELETE {}

export type Response_Inventory_GET_all = Inventory_GET_all | Common_Response_Error;
export type Response_Inventory_GET_one = Inventory_GET_one | Common_Response_Error;
export type Response_Inventory_POST = Inventory_POST | Common_Response_Error;
export type Response_Inventory_PATCH = Inventory_PATCH | Common_Response_Error;
export type Response_Inventory_DELETE = Inventory_DELETE | Common_Response_Error;