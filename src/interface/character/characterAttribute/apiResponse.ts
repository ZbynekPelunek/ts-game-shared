import { CharacterAttributeDTO } from './characterAttribute';

export interface GetCharacterAttributesResponseDTO
  extends Pick<
    CharacterAttributeDTO,
    | 'addedValue'
    | 'attribute'
    | 'attributeName'
    | 'baseValue'
    | 'characterId'
    | 'totalValue'
  > {}

export interface CreateCharacterAttributeResponseDTO {
  characterAttribute: Pick<
    CharacterAttributeDTO,
    | 'addedValue'
    | 'attribute'
    | 'attributeName'
    | 'baseValue'
    | 'characterId'
    | 'totalValue'
  >;
}

export type CreateCharacterAttributeResponse = CreateCharacterAttributeResponseDTO;

export interface ListCharacterAttributesResponse {
  characterAttributes: GetCharacterAttributesResponseDTO[];
}

export interface AttributeBonusCalculations {
  // Primary attributes
  agility: number;
  strength: number;
  stamina: number;
  intellect: number;

  // Bonuses from primary attributes
  agilityBonusCritChance: number;
  strengthBonusCritDamage: number;
  staminaBonusHealth: number;
  intellectBonusMultistrike: number;

  // Main attributes with bonuses applied
  health: number;
  totalHealth: number;
  power: number;
  armor: number;
  minDamage: number;
  maxDamage: number;

  // Secondary attributes with bonuses
  criticalChancePercent: number;
  criticalDamagePercent: number;
  multistrikeChancePercent: number;

  // Misc attributes
  bonusDamagePercent: number;
  bonusHealthPercent: number;
}

export interface CalculateAttributeBonusesResponse {
  characterId: string;
  calculations: AttributeBonusCalculations;
}
