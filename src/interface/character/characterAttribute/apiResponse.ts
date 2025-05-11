import {
  CommonErrorResponse,
  CommonSuccessResponse
} from '../../API/commonResponse';
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

export interface CreateCharacterAttributeResponseDTO
  extends CommonSuccessResponse {
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

export type CreateCharacterAttributeResponse =
  | CreateCharacterAttributeResponseDTO
  | CommonErrorResponse;

export type ListCharacterAttributesResponse =
  | { success: true; characterAttributes: GetCharacterAttributesResponseDTO[] }
  | CommonErrorResponse;
