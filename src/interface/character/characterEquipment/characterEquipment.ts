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

export interface CommonEquipmentItemParams {
  uiPosition: UiPosition;
  slot: EquipmentSlot;
  itemId?: number;
}

export interface CharacterEquipmentBackend extends CommonEquipmentItemParams {
  characterId: Types.ObjectId;
  _id?: Types.ObjectId;
}

export interface CharacterEquipmentFrontend extends CommonEquipmentItemParams {
  equipmentId: string;
  characterId: string;
}