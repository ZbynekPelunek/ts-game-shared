import {
  Common_Response_Error,
  Common_Response_Success,
} from '../../API/commonResponse';
import { CharacterAttributeDTO } from './characterAttribute';

export interface ListCharacterAttributes extends Common_Response_Success {
  characterAttributes: CharacterAttributeDTO[];
}

export interface CreateCharacterAttribute extends Common_Response_Success {
  characterAttribute: CharacterAttributeDTO;
}

export interface CreateCharacterAttributeBundle
  extends Common_Response_Success {}

export type CreateCharacterAttributeResponse =
  | CreateCharacterAttribute
  | Common_Response_Error;
export type CreateCharacterAttributeBundleResponse =
  | CreateCharacterAttributeBundle
  | Common_Response_Error;
export type ListCharacterAttributesResponse =
  | ListCharacterAttributes
  | Common_Response_Error;
