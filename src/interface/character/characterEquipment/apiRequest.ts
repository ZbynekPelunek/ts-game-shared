import { CharacterEquipmentFrontend } from './characterEquipment';

export interface Request_CharacterEquipment_GET_all_query {
  characterId: string;
}

export interface Request_CharacterEquipment_POST_body {
  characterEquipment: CharacterEquipmentFrontend | CharacterEquipmentFrontend[];
}