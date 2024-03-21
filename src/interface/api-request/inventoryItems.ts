export interface Request_Inventories_GET_all_query {
  characterId?: string;
}

export interface Request_Inventories_GET_item_param {
  inventoryItemId: string;
}

export interface Request_Inventories_POST_body {
  characterId: string;
  slot: number;
  itemId?: number | null;
}

export interface Request_Inventories_PATCH_param {
  inventoryItemId: string;
}

export interface Request_Inventories_PATCH_body {
  characterId?: string;
  itemId?: number;
  amount?: number;
  previousItemSlot?: number;
}