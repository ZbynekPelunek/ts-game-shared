import { AttributeName, MainAttributeNames } from './character/attributes.interface';
import { EquipmentArmor, EquipmentSlot, EquipmentWeapon } from './character/equipmentItems.interface';
import { CommonItemParams, ItemQuality } from './item.interface';

export interface CommonItemsEquipmenParams extends CommonItemParams {
  itemLevel: number;
  attributes: [ItemAttribute, ...ItemAttribute[]];
  slot: EquipmentSlot;
  equipmentType: ArmorType | WeaponType;
  setId?: number;
  isShopItem?: boolean;
  maxItemLevel?: number;
  levelReq?: number;
}

interface RequiredArmorItemAttribute extends ItemAttribute {
  attributeName: MainAttributeNames.ARMOR;
  requiredQuality: ItemQuality.COMMON
}

export interface Armor extends CommonItemsEquipmenParams {
  attributes: [RequiredArmorItemAttribute, ...ItemAttribute[]];
  equipmentType: ArmorType;
  slot: EquipmentArmor;
}

interface RequiredWeaponItemAttribute_1 extends ItemAttribute {
  attributeName: MainAttributeNames.MIN_DAMAGE;
  requiredQuality: ItemQuality.COMMON
}

interface RequiredWeaponItemAttribute_2 extends ItemAttribute {
  attributeName: MainAttributeNames.MAX_DAMAGE;
  requiredQuality: ItemQuality.COMMON
}


export interface Weapon extends CommonItemsEquipmenParams {
  attributes: [RequiredWeaponItemAttribute_1, RequiredWeaponItemAttribute_2, ...ItemAttribute[]];
  equipmentType: WeaponType;
  slot: EquipmentWeapon;
}

// export interface ItemsEquipmentBackend extends CommonItemsEquipmenParams {
//   _id: number;
// }

// export interface ItemsEquipmentFrontend extends CommonItemsEquipmenParams {
//   itemId: number;
// }

export enum ArmorType {
  CLOTH = 'CLOTH',
  LEATHER = 'LEATHER',
  PLATE = 'PLATE',
  SHIELD = 'SHIELD'
}

export enum WeaponType {
  SWORD_1HAND = 'SWORD_1HAND',
  SWORD_2HAND = 'SWORD_2HAND',
  STAFF = 'STAFF',
  WAND = 'WAND',
  AXE_1HAND = 'AXE_1HAND',
  AXE_2HAND = 'AXE_2HAND',
}

export interface ItemAttribute {
  attributeName: AttributeName;
  attributeMinValue: number;
  attributeMaxValue: number;
  requiredQuality: ItemQuality;
  attributeRolledValue?: number;
}