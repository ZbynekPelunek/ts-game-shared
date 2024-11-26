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
  attributeName: AttributeName;
  characterId: Types.ObjectId;
  addedValue?: Partial<AddedValue>;
}

export interface CharacterAttributeDocument
  extends CharacterAttributeMongooseSchema,
    Document<Types.ObjectId> {}

export type CharacterAttributeDTO = Omit<
  Pick<
    CharacterAttribute,
    | 'baseValue'
    | 'addedValue'
    | 'totalValue'
    | 'characterId'
    | 'attributeName'
    | 'attribute'
  >,
  'characterId'
> & {
  characterId: string;
  id: string;
};

export type CharacterAttributeCreateDTO = Omit<
  Pick<CharacterAttribute, 'baseValue' | 'addedValue' | 'attributeName'>,
  'characterId' | 'addedValue'
> & {
  characterId: string;
  addedValue?: AddedValue;
};
