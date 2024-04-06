import { Types } from 'mongoose';

import { InventoryBackend, InventoryFrontend } from './inventory/inventory';
import { CharacterCurrencyFrontend } from './characterCurrency/characterCurrency';

export interface CommonCharacterParams {
  name: string;
  level?: number;
  currentExperience?: number;
  maxExperience?: number;
  adventures?: number[];
}

export interface CharacterBackend extends CommonCharacterParams {
  _id?: Types.ObjectId;
  accountId: Types.ObjectId;
  inventory?: InventoryBackend[];
  characterAttributes?: Types.ObjectId[];
  currencyIds?: Types.ObjectId[];
  equipment?: Types.ObjectId[];
  maxInventorySlot?: number;
}

export interface CharacterFrontend extends CommonCharacterParams {
  characterId: string;
  accountId: string;
  inventory: InventoryFrontend[];
  characterAttributes: string[];
  currencyIds: string[];
  equipment: string[];
  currencies?: CharacterCurrencyFrontend[];
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
