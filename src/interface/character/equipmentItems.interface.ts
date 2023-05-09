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

export type UiPostition = 'left' | 'right' | 'bottom';

export interface CommonEquipmentItemParams {
  uiPosition: UiPostition;
}

export interface CharacterEquipmentBackend extends CommonEquipmentItemParams {
  _id: EquipmentSlot;
  characterId: Types.ObjectId;
  itemId: Types.ObjectId;
}

export interface CharacterEquipmentFrontend extends CommonEquipmentItemParams {
  equipmentId: EquipmentSlot;
  characterId: string;
  itemId: string | null;
}