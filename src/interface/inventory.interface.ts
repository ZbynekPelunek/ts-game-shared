import { Guid } from 'guid-typescript';

export interface InventorySlot {
  slot: number;
  itemId: number | null;
  amount?: number;
}

export interface Inventory {
  _id: Guid;
  'max-character-slot': Number;
  slots: InventorySlot[];
}