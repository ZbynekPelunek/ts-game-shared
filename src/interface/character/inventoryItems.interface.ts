import { Types } from 'mongoose';

export interface CommonInventoryItemParams {
  amount: number;
  slot: number;
}

export interface InventoryItemBackend extends CommonInventoryItemParams {
  _id?: Types.ObjectId;
  itemId: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface InventoryItemFrontend extends CommonInventoryItemParams {
  itemId: string;
  characterId: string;
}