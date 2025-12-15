import { AttributeName, MainAttributeNames } from '../attribute/attribute';
import {
  EquipmentArmor,
  EquipmentSlot,
  EquipmentWeapon,
  EquipmentTrinket
} from '../character/characterEquipment/characterEquipment';
import { CommonItemParams, ItemQuality, ItemType } from './item';

// Base Equipment interface
export interface BaseEquipment extends CommonItemParams {
  itemType: ItemType.EQUIPMENT;
  itemLevel: number;
  attributes: ItemAttribute[];
  slot: EquipmentSlot;
  setId?: number;
  maxItemLevel?: number;
  equipmentType: EquipmentType;
}

// Equipment subtypes enum
export enum EquipmentType {
  ARMOR = 'ARMOR',
  WEAPON = 'WEAPON',
  TRINKET = 'TRINKET'
}

// Armor specific interface
export interface Armor extends BaseEquipment {
  equipmentType: EquipmentType.ARMOR;
  armorType: ArmorType;
  slot: EquipmentArmor;
  attributes: [RequiredArmorAttribute, ...ItemAttribute[]];
}

// Weapon specific interface
export interface Weapon extends BaseEquipment {
  equipmentType: EquipmentType.WEAPON;
  weaponType: WeaponType;
  slot: EquipmentWeapon;
  attributes: [RequiredMinDamageAttribute, RequiredMaxDamageAttribute, ...ItemAttribute[]];
}

// Trinket specific interface
export interface Trinket extends BaseEquipment {
  equipmentType: EquipmentType.TRINKET;
  slot: EquipmentTrinket;
  attributes: ItemAttribute[];
}

// Union type for all equipment
export type Equipment = Armor | Weapon | Trinket;

export enum ArmorType {
  CLOTH = 'CLOTH',
  LEATHER = 'LEATHER',
  PLATE = 'PLATE'
}

export enum WeaponType {
  SWORD_1HAND = 'SWORD_1HAND',
  SWORD_2HAND = 'SWORD_2HAND',
  STAFF = 'STAFF',
  WAND = 'WAND',
  AXE_1HAND = 'AXE_1HAND',
  AXE_2HAND = 'AXE_2HAND'
}

export interface ItemAttribute {
  attributeName: AttributeName;
  attributeValue: number;
  requiredQuality?: ItemQuality;
}

// Required attribute types for validation
interface RequiredArmorAttribute extends ItemAttribute {
  attributeName: MainAttributeNames.ARMOR;
  requiredQuality: ItemQuality.COMMON;
}

interface RequiredMinDamageAttribute extends ItemAttribute {
  attributeName: MainAttributeNames.MIN_DAMAGE;
  requiredQuality: ItemQuality.COMMON;
}

interface RequiredMaxDamageAttribute extends ItemAttribute {
  attributeName: MainAttributeNames.MAX_DAMAGE;
  requiredQuality: ItemQuality.COMMON;
}
