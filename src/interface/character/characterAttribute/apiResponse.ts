import { Common_Response_Error, Common_Response_Success } from '../../API/commonResponse';
import { CharacterAttributeFrontend } from './characterAttribute';

export interface CharacterAttribute_GET_all extends Common_Response_Success {
  characterAttributes: CharacterAttributeFrontend[];
}

export interface CharacterAttribute_POST extends Common_Response_Success {
  characterAttributes: CharacterAttributeFrontend[];
}

export type Response_CharacterAttribute_POST = CharacterAttribute_POST | Common_Response_Error;
export type Response_CharacterAttribute_GET_all = CharacterAttribute_GET_all | Common_Response_Error;