import { ParsedQs } from 'qs';
import type { ParamsDictionary } from 'express-serve-static-core';

export interface ListInventoriesRequestQuery extends ParsedQs {
  characterId?: string;
  slot?: string;
  populateItem?: string;
}

export interface GetInventoryRequestParams extends ParamsDictionary {
  inventoryId: string;
}

export interface CreateInventoryRequestBody {
  characterId: string;
  slot?: number;
  itemId?: number | null;
}

export interface UpdateInventoryRequestParams extends ParamsDictionary {
  inventorySlotId: string;
}

export interface UpdateInventoryRequestBody {
  item: { itemId: number; amount: number; previousSlot?: number } | null;
}

export interface DeleteInventoryRequestParams extends ParamsDictionary {
  inventoryId: string;
}
