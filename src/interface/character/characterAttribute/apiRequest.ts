import { CharacterAttributeCreateDTO } from './characterAttribute';

export interface CharacterAttributeListQueryParams {
  characterId?: string;
  populateAttribute?: boolean;
}

export interface CharacterAttributeCreateBody {
  characterAttribute: CharacterAttributeCreateDTO;
}

export interface CharacterAttributeCreateBundleBody {
  characterAttributes: CharacterAttributeCreateDTO[];
}
