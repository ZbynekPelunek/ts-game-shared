import { IAdventure } from '../adventures.interface';
import { CharacterFrontend, EquipmentSlotsArr } from '../character/character.interface';
import { Common_Response_Error, Common_Response_Error_unknown, Common_Response_Success } from './common';

export interface Characters_GET_one extends Common_Response_Success {
  character: CharacterFrontend
}

export interface PUT_characterByID {
  character: CharacterFrontend
}

export interface GET_characterAdventuresAll {
  character: { characterId: string; level: number }; adventures: IAdventure[]
}

export interface GET_characterEquipSlots {
  equipmentSlots: EquipmentSlotsArr
}

export interface POST_characterActions {
  character: CharacterFrontend
}

export type Response_Characters_GET_one = Characters_GET_one | Common_Response_Error | Common_Response_Error_unknown;