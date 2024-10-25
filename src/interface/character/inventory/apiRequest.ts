export interface Request_Inventory_GET_all_query {
  characterId?: string;
  slot?: number;
  populateItem?: boolean;
}

export interface Request_Inventory_GET_item_param {
  inventoryId: string;
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
  item: {
    itemId: number;
    amount: number;
    previousSlot?: number;
  } | null;
}

export interface Request_Inventory_DELETE_param {
  inventoryId: string;
}
