import { InventoryActions } from './inventory';

export interface Request_Inventory_GET_all_query {
  characterId?: string;
}

export interface Request_Inventory_GET_item_param {
  inventoryId: string;
}

export interface Request_Inventory_POST_query {
  action?: InventoryActions;
}

export interface Request_Inventory_POST_body {
  characterId: string;
  slot?: number;
  itemId?: number | null;
}

export interface Request_Inventory_PATCH_param {
  inventoryId: string;
}

export interface Request_Inventory_PATCH_body {
  characterId?: string;
  itemId?: number;
  amount?: number;
  previousItemSlot?: number;
}