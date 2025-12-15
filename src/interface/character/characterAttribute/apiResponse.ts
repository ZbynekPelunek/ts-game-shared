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
