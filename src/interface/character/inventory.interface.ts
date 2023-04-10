import { Types } from 'mongoose';

export interface InventorySlot {
  slot: number;
  itemId: number | null;
  amount?: number;
}

export interface CommonInventoryParams {
  slots: InventorySlot[];
}

export interface InventoryBackend extends CommonInventoryParams {
  _id: Types.ObjectId;
  characterId: Types.ObjectId;
  'max-character-slot': number;
}

export interface InventoryFrontend extends CommonInventoryParams {
  inventoryId: string;
}