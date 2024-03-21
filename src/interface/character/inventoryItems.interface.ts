import { Types } from 'mongoose';

export interface CommonInventoryItemParams {
  slot: number;
  itemId?: number | null;
}

export interface InventoryItemBackend extends CommonInventoryItemParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
  amount?: number;
}

export interface InventoryItemFrontend extends CommonInventoryItemParams {
  inventoryItemId: string;
  characterId: string;
  amount: number;
}