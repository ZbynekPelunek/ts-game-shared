import { Types } from 'mongoose';

export enum EquipmentSlot {
  // HEAD = 'HEAD',
  // SHOULDER = 'SHOULDER',
  CHEST = 'CHEST',
  // HANDS = 'HANDS',
  LEGS = 'LEGS',
  MAIN_HAND = 'MAIN_HAND'
  // OFF_HAND = 'OFF_HAND',
  // ONE_HAND = 'ONE_HAND',
  // TWO_HAND = 'TWO_HAND',
  // POTION = 'POTION'
}

export type EquipmentArmor = EquipmentSlot.CHEST | EquipmentSlot.LEGS;
export type EquipmentWeapon = EquipmentSlot.MAIN_HAND;

//export type UiPosition = 'left' | 'right' | 'bottom';
export enum UiPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM'
}

export interface CommonEquipmentSlotParams {
  uiPosition: UiPosition;
  slot: EquipmentSlot;
  itemId: number | null;
}

export interface CharacterEquipmentItem {
  itemId: number;
}

export interface CharacterEquipmentBackend extends CommonEquipmentSlotParams {
  characterId: Types.ObjectId;
  _id?: Types.ObjectId;
}

export interface CharacterEquipmentFrontend extends CommonEquipmentSlotParams {
  _id: string;
  characterId: string;
}

export enum CharacterEquipmentPostActions {
  EQUIP_ITEM = 'equipItem'
}

export enum CharacterEquipmentPatchActions {
  UNEQUIP_ITEM = 'unequipItem',
  SELL_ITEM = 'sellItem'
}
