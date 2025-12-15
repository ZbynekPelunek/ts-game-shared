import { InventoryFrontend } from './inventory';

export interface ListInventoriesResponse {
  inventories: InventoryFrontend[];
}

export interface GetInventoryResponse {
  inventory: InventoryFrontend;
}

export interface CreateInventoryResponse {
  inventory: InventoryFrontend[];
}

export type UpdateInventoryResponse = {};

export type DeleteInventoryResponse = {};
