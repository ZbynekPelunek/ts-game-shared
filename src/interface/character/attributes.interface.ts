import { Types } from 'mongoose';

export interface BasicAttribute {
  label: string;
  attributeName: AttributeNames;
  isPercent: boolean;
  desc?: string;
}

export interface BasicAttributeFrontend extends BasicAttribute {
  attributeId: string;
}

export interface BasicAttributeBackend extends BasicAttribute {
  _id: Types.ObjectId;
}

export enum MainAttributeNames {
  HEALTH = 'HEALTH',
  POWER = 'POWER',
  ARMOR = 'ARMOR',
  MIN_DAMAGE = 'MIN_DAMAGE',
  MAX_DAMAGE = 'MAX_DAMAGE'
}

export enum PrimaryAttributeNames {
  AGILITY = 'AGILITY',
  STRENGTH = 'STRENGTH',
  INTELLECT = 'INTELLECT',
  STAMINA = 'STAMINA'
}

export enum SecondaryAttributeNames {
  CRIT_CHANCE_RATING = 'CRIT_CHANCE_RATING',
  CRIT_CHANCE_PERCENT = 'CRIT_CHANCE_PERCENT',
  CRIT_DAMAGE_RATING = 'CRIT_DAMAGE_RATING',
  CRIT_DAMAGE_PERCENT = 'CRIT_DAMAGE_PERCENT',
  MULTISTRIKE_RATING = 'MULTISTRIKE_RATING',
  MULTRISTRIKE_CHANCE = 'MULTRISTRIKE_CHANCE'
}

export enum MiscAttributeNames {
  BONUS_EXPERIENCE_STATIC = 'BONUS_EXPERIENCE_STATIC',
  BONUS_EXPERIENCE_PERCENT = 'BONUS_EXPERIENCE_PERCENT',
  BONUS_HEALTH_PERCENT = 'BONUS_HEALTH_PERCENT',
  BONUS_DAMAGE_PERCENT = 'BONUS_DAMAGE_PERCENT'
}

export type AttributeNames = MainAttributeNames | PrimaryAttributeNames | SecondaryAttributeNames | MiscAttributeNames;

export interface CommonCharacterAttributeParams {
  'base-value': number;
  'added-value': number;
  'stats-added-value': number;
  'total-value': number;
  attribute?: BasicAttribute;
}

export interface CharacterAttributeBackend extends CommonCharacterAttributeParams {
  characterId: Types.ObjectId;
  attributeId: Types.ObjectId;
  _id?: Types.ObjectId;
}

export interface CharacterAttributeFrontend extends CommonCharacterAttributeParams {
  characterAttributeId: string;
  characterId: string;
  attributeId: string;
}

export interface CharacterAttributeFrontendPopulated extends CharacterAttributeFrontend {
  attribute: BasicAttribute;
}