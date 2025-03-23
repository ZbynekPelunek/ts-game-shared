import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../../API/commonResponse';
import { CharacterAttributeDTO } from './characterAttribute';

export interface ListCharacterAttributes extends CommonSuccessResponse {
  characterAttributes: CharacterAttributeDTO[];
}

export interface CreateCharacterAttribute extends CommonSuccessResponse {
  characterAttribute: CharacterAttributeDTO;
}

export interface CreateCharacterAttributeBundle extends CommonSuccessResponse {}

export type CreateCharacterAttributeResponse =
  | CreateCharacterAttribute
  | CommonErrorResponse;
export type CreateCharacterAttributeBundleResponse =
  | CreateCharacterAttributeBundle
  | CommonErrorResponse;
export type ListCharacterAttributesResponse =
  | ListCharacterAttributes
  | CommonErrorResponse;
