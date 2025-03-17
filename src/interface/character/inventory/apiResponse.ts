import { InventoryFrontend } from './inventory';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../../API/commonResponse';

export interface ListInventories extends Common_Response_Success {
  inventories: InventoryFrontend[];
}

export interface GetInventory extends Common_Response_Success {
  inventory: InventoryFrontend;
}

export interface CreateInventory extends Common_Response_Success {
  inventory: InventoryFrontend[];
}

export interface UpdateInventory extends Common_Response_Success {}

export interface DeleteInventory {}

export type ListInventoriesResponse = ListInventories | Common_Response_Error;
export type GetInventoryResponse = GetInventory | Common_Response_Error;
export type CreateInventoryResponse = CreateInventory | Common_Response_Error;
export type UpdateInventoryResponse = UpdateInventory | Common_Response_Error;
export type DeleteInventoryResponse = DeleteInventory | Common_Response_Error;
