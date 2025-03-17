import { CharacterEquipmentFrontend } from './characterEquipment';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../../API/commonResponse';

export interface ListCharacterEquipments extends Common_Response_Success {
  characterEquipments: CharacterEquipmentFrontend[];
}

export interface CreateCharacterEquipment extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend[];
}

export interface UpdateCharacterEquipment extends Common_Response_Success {
  characterEquipment: CharacterEquipmentFrontend;
}

export interface CharacterEquipmentUnequip extends Common_Response_Success {}

export type ListCharacterEquipmentsResponse =
  | ListCharacterEquipments
  | Common_Response_Error;
export type CreateCharacterEquipmentResponse =
  | CreateCharacterEquipment
  | Common_Response_Error;
export type UpdateCharacterEquipmentResponse =
  | UpdateCharacterEquipment
  | Common_Response_Error;
export type CharacterEquipmentUnequipResponse =
  | CharacterEquipmentUnequip
  | Common_Response_Error;
