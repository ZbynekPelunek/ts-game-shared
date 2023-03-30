import { Guid } from 'guid-typescript';

interface BasicAtribute {
  label: string;
  desc: string;
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

interface PrimaryAttribute extends BasicAtribute {
  attributeId: PrimaryAttributeId;
  type: AttributeType.PRIMARY;
}

interface SecondaryAttribute extends BasicAtribute {
  attributeId: SecondaryAttributeId;
  type: AttributeType.SECONDARY;
}

interface MiscAttribute extends BasicAtribute {
  attributeId: MiscAttributeId;
  type: AttributeType.MISC;
}

export type Attribute = PrimaryAttribute | SecondaryAttribute | MiscAttribute;

export interface CharacterAttribute {
  characterId?: Guid;
  attributeId: PrimaryAttributeId | SecondaryAttributeId | MiscAttributeId;
  'base-value': number;
  'added-value': number;
}