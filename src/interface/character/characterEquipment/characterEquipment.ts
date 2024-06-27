import { Types } from 'mongoose';

export enum EquipmentSlot {
  HEAD = 'HEAD',
  SHOULDER = 'SHOULDER',
  CHEST = 'CHEST',
  HANDS = 'HANDS',
  LEGS = 'LEGS',
  MAIN_HAND = 'MAIN_HAND',
  OFF_HAND = 'OFF_HAND',
  ONE_HAND = 'ONE_HAND',
  TWO_HAND = 'TWO_HAND',
  POTION = 'POTION'
}

export type EquipmentArmor = EquipmentSlot.HEAD | EquipmentSlot.SHOULDER | EquipmentSlot.CHEST | EquipmentSlot.HANDS | EquipmentSlot.LEGS | EquipmentSlot.OFF_HAND;
export type EquipmentWeapon = EquipmentSlot.MAIN_HAND | EquipmentSlot.OFF_HAND | EquipmentSlot.ONE_HAND | EquipmentSlot.TWO_HAND;

//export type UiPosition = 'left' | 'right' | 'bottom';
export enum UiPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM'
}

export interface CommonEquipmentSlotParams {
  uiPosition: UiPosition;
  slot: EquipmentSlot;
  item?: CharacterEquipmentItem | null;
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

export enum CharacterEquipmentPatchActions {
  EQUIP_ITEM = 'equipItem',
  UNEQUIP_ITEM = 'unequipItem'
}