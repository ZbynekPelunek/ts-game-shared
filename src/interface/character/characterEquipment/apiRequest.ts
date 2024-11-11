import { CharacterEquipmentFrontend, CharacterEquipmentItem, EquipmentSlot } from './characterEquipment';

export interface Request_CharacterEquipment_GET_all_query {
  characterId?: string;
  itemSlot?: EquipmentSlot;
}

export interface Request_CharacterEquipment_POST_body {
  characterEquipment: Omit<CharacterEquipmentFrontend, '_id'> | Omit<CharacterEquipmentFrontend, '_id'>[];
}

export interface Request_CharacterEquipment_PATCH_param {
  characterEquipmentId: string;
}

export interface Request_CharacterEquipment_PATCH_body {
  itemId: number | null;
}