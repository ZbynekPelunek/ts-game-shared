import { Types } from 'mongoose';

export enum EquipmentSlot {
  // HEAD = 'HEAD',
  // SHOULDER = 'SHOULDER',
  CHEST = 'CHEST',
  // HANDS = 'HANDS',
  LEGS = 'LEGS',
  MAIN_HAND = 'MAIN_HAND',
  TRINKET = 'TRINKET'
  // OFF_HAND = 'OFF_HAND',
  // ONE_HAND = 'ONE_HAND',
  // TWO_HAND = 'TWO_HAND',
  // POTION = 'POTION'
}

export type EquipmentArmor = EquipmentSlot.CHEST | EquipmentSlot.LEGS;
export type EquipmentWeapon = EquipmentSlot.MAIN_HAND;
export type EquipmentTrinket = EquipmentSlot.TRINKET;

export interface CharacterEquipment {
  id: number;
  slot: EquipmentSlot;
  characterId: Types.ObjectId;
  itemId: number | null;
}

export enum CharacterEquipmentPostActions {
  EQUIP_ITEM = 'equipItem'
}

export enum CharacterEquipmentPatchActions {
  UNEQUIP_ITEM = 'unequipItem',
  SELL_ITEM = 'sellItem'
}
