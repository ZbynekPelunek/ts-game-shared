import { ParsedQs } from 'qs';
import { CharacterAttributeCreateDTO } from './characterAttribute';

export interface ListCharacterAttributesRequestQuery extends ParsedQs {
  characterId?: string;
  populateAttribute?: string;
}

export interface CharacterAttributeCreateBody {
  characterAttribute: CharacterAttributeCreateDTO;
}

export interface CharacterAttributeCreateBundleBody {
  characterAttributes: CharacterAttributeCreateDTO[];
}
