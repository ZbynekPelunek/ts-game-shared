export interface Request_Inventories_GET_all_query {
  characterId?: string;
}

export interface Request_Inventories_GET_item_param {
  inventoryItemId: string;
}

export interface Request_Inventories_POST_body {
  characterId: string;
  maxInventorySlot: number;
}

export interface Request_Inventories_POST_item_param {
  slot: number;
}

export interface Request_Inventories_POST_item_body {
  characterId: string;
  itemId: number;
  amount: number;
  previousItemSlot?: number;
}