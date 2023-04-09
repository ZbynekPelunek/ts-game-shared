import { Types } from 'mongoose';

export interface BasicAttribute {
  label: string;
  attributeId: string;
  type: string;
  desc?: string;
  isPercent?: boolean;
}

export interface BasicAttributeBackend extends BasicAttribute {
  createdAt?: Date;
  updatedAt?: Date;
}

export enum AttributeType {
  MAIN = 'MAIN',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  MISC = 'MISC'
}

export enum MainAttributeId {
  HEALTH = 'HEALTH',
  POWER = 'POWER',
  ARMOR = 'ARMOR',
  MIN_DAMAGE = 'MIN_DAMAGE',
  MAX_DAMAGE = 'MAX_DAMAGE'
}

export enum PrimaryAttributeId {
  AGILITY = 'AGILITY',
  STRENGTH = 'STRENGTH',
  INTELLECT = 'INTELLECT',
  STAMINA = 'STAMINA'
}

export enum SecondaryAttributeId {
  CRIT_CHANCE_RATING = 'CRIT_CHANCE_RATING',
  CRIT_CHANCE_PERCENT = 'CRIT_CHANCE_PERCENT',
  CRIT_DAMAGE_RATING = 'CRIT_DAMAGE_RATING',
  CRIT_DAMAGE_PERCENT = 'CRIT_DAMAGE_PERCENT',
  MULTISTRIKE_RATING = 'MULTISTRIKE_RATING',
  MULTRISTRIKE_CHANCE = 'MULTRISTRIKE_CHANCE'
}

export enum MiscAttributeId {
  BONUS_EXPERIENCE_STATIC = 'BONUS_EXPERIENCE_STATIC',
  BONUS_EXPERIENCE_PERCENT = 'BONUS_EXPERIENCE_PERCENT',
  BONUS_HEALTH_PERCENT = 'BONUS_HEALTH_PERCENT',
  BONUS_DAMAGE_PERCENT = 'BONUS_DAMAGE_PERCENT'
}

export interface MainAttribute extends BasicAttribute {
  attributeId: MainAttributeId;
  type: AttributeType.MAIN;
}

export interface PrimaryAttribute extends BasicAttribute {
  attributeId: PrimaryAttributeId;
  type: AttributeType.PRIMARY;
}

export interface SecondaryAttribute extends BasicAttribute {
  attributeId: SecondaryAttributeId;
  type: AttributeType.SECONDARY;
}

export interface MiscAttribute extends BasicAttribute {
  attributeId: MiscAttributeId;
  type: AttributeType.MISC;
}

export interface CommonCharacterAttributeParams {
  attributeId: MainAttributeId | PrimaryAttributeId | SecondaryAttributeId | MiscAttributeId;
  'base-value': number;
  'added-value': number;
  'stats-added-value': number;
  'total-value': number;
}

export interface CharacterAttributeBackend extends CommonCharacterAttributeParams {
  _id: Types.ObjectId;
  characterId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface CharacterAttributeFrontend extends CommonCharacterAttributeParams {
  characterAttributeId: string;
  characterId: string;
} 