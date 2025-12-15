import { CharacterEquipment } from './characterEquipment';

export interface CharacterEquipmentDTO
  extends Pick<CharacterEquipment, 'id' | 'slot' | 'itemId'> {
  readonly _id: string;
  characterId: string;
}

export interface CharacterEquipmentItem
  extends Pick<CharacterEquipmentDTO, 'itemId'> {}
