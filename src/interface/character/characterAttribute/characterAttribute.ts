import { Types } from 'mongoose';

import { BasicAttribute } from '../../attribute/attribute';

export interface CommonCharacterAttributeParams {
  baseValue: number;
  addedValue: number;
  statsAddedValue: number;
  totalValue: number;
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