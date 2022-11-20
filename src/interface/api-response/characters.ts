import { IAdventure } from '../adventures.interface';
import { EquipmentSlotsArr, ICharacter } from '../character.interface';

export interface GET_characterByID {
  character: ICharacter
}

export interface PUT_characterByID {
  character: ICharacter
}

export interface GET_characterAdventuresAll {
  character: { characterId: string; level: number }; adventures: IAdventure[]
}

export interface GET_characterEquipSlots {
  equipmentSlots: EquipmentSlotsArr
}

export interface POST_characterActions {
  character: ICharacter
}