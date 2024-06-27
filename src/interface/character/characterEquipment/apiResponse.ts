import { CharacterEquipmentFrontend } from './characterEquipment';
import { Common_Response_Error, Common_Response_Success } from '../../API/commonResponse';

export interface CharacterEquipment_GET_all extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend[];
}

export interface CharacterEquipment_POST extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend[];
}

export interface CharacterEquipment_PATCH extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend;
}


export type Response_CharacterEquipment_GET_all = CharacterEquipment_GET_all | Common_Response_Error;
export type Response_CharacterEquipment_POST = CharacterEquipment_POST | Common_Response_Error;
export type Response_CharacterEquipment_PATCH = CharacterEquipment_PATCH | Common_Response_Error;
