import {
  Common_Response_Error,
  Common_Response_Success,
} from '../../API/commonResponse';
import { CharacterAttributeDTO } from './characterAttribute';

export interface CharacterAttributeList extends Common_Response_Success {
  characterAttributes: CharacterAttributeDTO[];
}

export interface CharacterAttributeCreate extends Common_Response_Success {
  characterAttribute: CharacterAttributeDTO;
}

export interface CharacterAttributeCreateBundle
  extends Common_Response_Success {}

export type ResponseCharacterAttributeCreate =
  | CharacterAttributeCreate
  | Common_Response_Error;
export type ResponseCharacterAttributeCreateBundle =
  | CharacterAttributeCreateBundle
  | Common_Response_Error;
export type ResponseCharacterAttributeList =
  | CharacterAttributeList
  | Common_Response_Error;
