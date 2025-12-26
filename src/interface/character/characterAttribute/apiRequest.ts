import { ParsedQs } from 'qs';
import { AddedValue, CharacterAttributeDTO } from './characterAttribute';

export interface ListCharacterAttributesRequestQuery extends ParsedQs {
  characterId?: string;
  populateAttribute?: string;
}

export interface CreateCharacterAttributeRequestDTO
  extends Omit<
    Pick<
      CharacterAttributeDTO,
      'addedValue' | 'attributeName' | 'baseValue' | 'characterId'
    >,
    'addedValue'
  > {
  addedValue?: Partial<AddedValue>;
}

export interface CalculateAttributeBonusesRequestQuery extends ParsedQs {
  characterId: string;
}
