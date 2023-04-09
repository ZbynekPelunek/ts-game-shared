import { Types } from 'mongoose';

import { EquipableItem, EquipmentSlot } from '../item.interface';
import { Currency } from './currency.interface';

export interface CommonCharacterParams {
  name: string;
  level: number;
  currentExperience: number;
  maxExperience: number;
  equipmentSlots: EquipmentSlotsArr;
  adventures: CharacterAdventure[];
  currencies: Currency[];
}

export interface CharacterBackend extends CommonCharacterParams {
  _id: Types.ObjectId;
  accountId: Types.ObjectId;
  inventoryId: Types.ObjectId;
  characterAttributes: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CharacterFrontend extends CommonCharacterParams {
  characterId: string;
  accountId: string;
  inventoryId: string;
  characterAttributes: string[];
}

interface CharacterAdventure {
  adventureId: number;
}

export type EquipmentSlotsArr = [
  {
    slot: EquipmentSlot.ARMOR;
    equipment: EquipableItem | null;
  },
  {
    slot: EquipmentSlot.WEAPON;
    equipment: EquipableItem | null;
  }
];

export enum CharacterActions {
  EQUIP_ITEM = 'EQUIP_ITEM',
  UNEQUIP_ITEM = 'UNEQUIP_ITEM',
  SELL = 'SELL'
}
