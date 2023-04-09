import { Types } from 'mongoose';

export interface BasicAttribute {
  label: string;
  attributeId: string;
  type: string;
  desc?: string;
  percent?: boolean;
}

export enum AttributeType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  MISC = 'MISC'
}

export enum PrimaryAttributeId {
  HEALTH = 'HEALTH',
  POWER = 'POWER',
  AGILITY = 'AGILITY',
  STRENGTH = 'STRENGTH',
  INTELLECT = 'INTELLECT',
  STAMINA = 'STAMINA',
  ARMOR = 'ARMOR',
  MIN_DAMAGE = 'MIN_DAMAGE',
  MAX_DAMAGE = 'MAX_DAMAGE'
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

export interface CharacterAttribute {
  _id: Types.ObjectId;
  characterId: Types.ObjectId;
  attributeId: PrimaryAttributeId | SecondaryAttributeId | MiscAttributeId;
  'base-value': number;
  'added-value': number;
  'stats-value': number;
  'total-value': number;
}