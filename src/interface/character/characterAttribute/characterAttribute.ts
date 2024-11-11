import { Types, Document } from 'mongoose';
import { AttributeName, BasicAttribute } from '../../attribute/attribute';

interface CharacterAttribute {
  characterId: Types.ObjectId;
  attributeName: AttributeName;
  baseValue: number;
  addedValue: AddedValue;
  totalValue: number;
  attribute?: BasicAttribute;
}

export type AddedValue = {
  equipment: number;
  otherAttributes: number;
};

export interface CharacterAttributeMongooseSchema
  extends Partial<Omit<CharacterAttribute, 'addedValue'>> {
  characterId: Types.ObjectId;
  addedValue?: Partial<AddedValue>;
}

export interface CharacterAttributeDocument
  extends CharacterAttributeMongooseSchema,
    Document<Types.ObjectId> {}

export type CharacterAttributeDTO = Pick<
  CharacterAttributeDocument,
  | 'baseValue'
  | 'addedValue'
  | 'totalValue'
  | 'characterId'
  | 'attributeName'
  | 'attribute'
>;
