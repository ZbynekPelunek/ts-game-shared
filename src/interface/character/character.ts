import { Types } from 'mongoose';

export interface CommonCharacterParams {
  name: string;
  level: number;
  characterClass: CharacterClass;
  race: CharacterRace;
  currentExperience: number;
  maxExperience: number;
  adventures?: number[];
}

export interface CharacterBackend extends CommonCharacterParams {
  _id?: Types.ObjectId;
  accountId: Types.ObjectId;
  maxInventorySlot?: number;
}

export interface CharacterFrontend extends CommonCharacterParams {
  characterId: string;
  accountId: string;
}

export enum CharacterRace {
  HUMAN = 'Human',
}

export enum CharacterClass {
  WARRIOR = 'Warrior',
}

export enum CharacterActions {
  EQUIP_ITEM = 'EQUIP_ITEM',
  UNEQUIP_ITEM = 'UNEQUIP_ITEM',
  SELL = 'SELL',
}
