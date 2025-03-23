import { InventoryFrontend } from './inventory';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../../API/commonResponse';

export interface ListInventories extends CommonSuccessResponse {
  inventories: InventoryFrontend[];
}

export interface GetInventory extends CommonSuccessResponse {
  inventory: InventoryFrontend;
}

export interface CreateInventory extends CommonSuccessResponse {
  inventory: InventoryFrontend[];
}

export interface UpdateInventory extends CommonSuccessResponse {}

export interface DeleteInventory {}

export type ListInventoriesResponse = ListInventories | CommonErrorResponse;
export type GetInventoryResponse = GetInventory | CommonErrorResponse;
export type CreateInventoryResponse = CreateInventory | CommonErrorResponse;
export type UpdateInventoryResponse = UpdateInventory | CommonErrorResponse;
export type DeleteInventoryResponse = DeleteInventory | CommonErrorResponse;
