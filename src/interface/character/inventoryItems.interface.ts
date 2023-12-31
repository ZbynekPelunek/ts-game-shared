import { Types } from 'mongoose';

export interface CommonInventoryItemParams {
  amount: number;
  slot: number;
  itemId: number;
}

export interface InventoryItemBackend extends CommonInventoryItemParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface InventoryItemFrontend extends CommonInventoryItemParams {
  characterId: string;
}