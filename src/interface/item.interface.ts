import { AttributeName } from './character/attributes.interface';
import { EquipmentArmor, EquipmentWeapon } from './character/equipmentItems.interface';

interface CommonItemParams {
  name: string;
  equipped: boolean;
  sellValue: number;
  maxStack: number;
  quality: ItemQuality;
  itemLevel: number;
  levelReq: number;
  shopItem: boolean;
}

export enum ItemQuality {
  COMMON = 'COMMON',
  UNCOMMON = 'UNCOMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY'
}

export interface Potion extends CommonItemParams {
  itemType: ItemType.POTION,
  attributes: ItemAttribute[];
}

interface Equipment extends CommonItemParams {
  itemType: ItemType.EQUIPMENT;
  attributes: ItemAttribute[];
}

export interface Armor extends Equipment {
  slot: EquipmentArmor;
  equipmentType: ArmorType,
}

export interface Weapon extends Equipment {
  slot: EquipmentWeapon;
  equipmentType: WeaponType;
}

export type EquipableItem = Armor | Weapon;
export type InventoryItem = EquipableItem | Potion;

export enum ItemType {
  EQUIPMENT = 'EQUIPMENT',
  POTION = 'POTION'
}

export enum ArmorType {
  CLOTH = 'CLOTH',
  LEATHER = 'LEATHER',
  PLATE = 'PLATE'
}

export enum WeaponType {
  SWORD_1HAND = 'SWORD_1HAND',
  SWORD_2HAND = 'SWORD_2HAND',
  STAFF = 'STAFF',
  BOW = 'BOW',
  AXE_1HAND = 'AXE_1HAND',
  AXE_2HAND = 'AXE_2HAND',
}

export interface ItemAttribute {
  attributeName: AttributeName;
  attributeMinValue: number;
  attributeMaxValue: number;
}

