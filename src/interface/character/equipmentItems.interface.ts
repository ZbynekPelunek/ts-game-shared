import { Types } from 'mongoose';

export enum EquipmentSlot {
  HEAD = 'HEAD',
  SHOULDER = 'SHOULDER',
  CHEST = 'CHEST',
  HANDS = 'HANDS',
  LEGS = 'LEGS',
  MAIN_HAND = 'MAIN_HAND',
  OFF_HAND = 'OFF_HAND'
}

export type EquipmentArmor = EquipmentSlot.HEAD | EquipmentSlot.SHOULDER | EquipmentSlot.CHEST | EquipmentSlot.HANDS | EquipmentSlot.LEGS | EquipmentSlot.OFF_HAND;
export type EquipmentWeapon = EquipmentSlot.MAIN_HAND | EquipmentSlot.OFF_HAND;

export type UiPostition = 'left' | 'right' | 'bottom';

export interface CommonEquipmentItemParams {
  uiPosition: UiPostition;
}

export interface EquipmentItemBackend extends CommonEquipmentItemParams {
  _id: EquipmentSlot;
  characterId: Types.ObjectId;
  itemId: Types.ObjectId;
}

export interface EquipmentItemFrontend extends CommonEquipmentItemParams {
  equipmentItemId: EquipmentSlot;
  characterId: string;
  itemId: string | null;
}