import { CharacterEquipmentFrontend } from './characterEquipment';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../../API/commonResponse';

export interface ListCharacterEquipments extends CommonSuccessResponse {
  characterEquipments: CharacterEquipmentFrontend[];
}

export interface CreateCharacterEquipment extends CommonSuccessResponse {
  characterEquipment: CharacterEquipmentFrontend[];
}

export interface UpdateCharacterEquipment extends CommonSuccessResponse {
  characterEquipment: CharacterEquipmentFrontend;
}

export interface CharacterEquipmentUnequip extends CommonSuccessResponse {}

export type ListCharacterEquipmentsResponse =
  | ListCharacterEquipments
  | CommonErrorResponse;
export type CreateCharacterEquipmentResponse =
  | CreateCharacterEquipment
  | CommonErrorResponse;
export type UpdateCharacterEquipmentResponse =
  | UpdateCharacterEquipment
  | CommonErrorResponse;
export type CharacterEquipmentUnequipResponse =
  | CharacterEquipmentUnequip
  | CommonErrorResponse;
