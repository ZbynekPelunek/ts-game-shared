import { Types } from 'mongoose';

export interface CommonInventoryParams {
  slot: number;
  itemId?: number | null;
}

export interface InventoryBackend extends CommonInventoryParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
  amount?: number;
}

export interface InventoryFrontend extends CommonInventoryParams {
  inventoryId: string;
  characterId: string;
  amount: number;
}

export enum InventoryActions {
  NEW = 'createNew'
}