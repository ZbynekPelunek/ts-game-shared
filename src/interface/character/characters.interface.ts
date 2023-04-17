import { Types } from 'mongoose';

import { InventoryItemFrontend } from './inventoryItems.interface';

export interface CommonCharacterParams {
  name: string;
  level: number;
  currentExperience: number;
  maxExperience: number;
}

export interface CharacterBackend extends CommonCharacterParams {
  _id?: Types.ObjectId;
  accountId: Types.ObjectId;
  inventory: Types.ObjectId[];
  characterAttributes: Types.ObjectId[];
  adventures: Types.ObjectId[];
  currencies: Types.ObjectId[];
  equipment: Types.ObjectId[];
  maxInventorySlot: number;
}

export interface CharacterFrontend extends CommonCharacterParams {
  characterId: string;
  accountId: string;
  inventory: string[] | null[];
  characterAttributes: string[];
  adventures: string[];
  currencies: string[];
  equipment: string[];
  inventoryItems?: InventoryItemFrontend[];
}

// export type EquipmentSlotsArr = [
//   {
//     slot: EquipmentSlot.ARMOR;
//     equipment: EquipableItem | null;
//   },
//   {
//     slot: EquipmentSlot.WEAPON;
//     equipment: EquipableItem | null;
//   }
// ];

export enum CharacterActions {
  EQUIP_ITEM = 'EQUIP_ITEM',
  UNEQUIP_ITEM = 'UNEQUIP_ITEM',
  SELL = 'SELL'
}
