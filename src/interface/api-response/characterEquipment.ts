import { CharacterEquipmentFrontend } from '../character/equipmentItems.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface CharacterEquipment_GET_all extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend[];
}

export interface CharacterEquipment_POST extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend[];
}


export type Response_CharacterEquipment_GET_all = CharacterEquipment_GET_all | Common_Response_Error;
export type Response_CharacterEquipment_POST = CharacterEquipment_POST | Common_Response_Error;
