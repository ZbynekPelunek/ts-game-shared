import { Types } from 'mongoose';

export interface CommonInventoryParams {
  slot: number;
  item?: InventoryItem | null;
}

export interface InventoryBackend extends CommonInventoryParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface InventoryFrontend extends CommonInventoryParams {
  _id: string;
  characterId: string;
}

export interface InventoryItem {
  itemId: number;
  amount: number;
}

export enum InventoryPostActions {
  NEW = 'createNew'
}

export enum InventoryPatchActions {
  SELL_ITEM = 'sellItem'
}