import { CharacterEquipmentDTO } from './characterEquipmentDTOs';

export interface ListCharacterEquipmentsResponseDTO
  extends Pick<CharacterEquipmentDTO, '_id' | 'id' | 'slot' | 'itemId' | 'characterId'> {}

export interface ListCharacterEquipmentsResponse {
  characterEquipments: ListCharacterEquipmentsResponseDTO[];
}

export interface CreateCharacterEquipmentResponseDTO
  extends Pick<CharacterEquipmentDTO, '_id' | 'id' | 'slot' | 'itemId' | 'characterId'> {}

export interface CreateCharacterEquipmentResponse {
  characterEquipment: CreateCharacterEquipmentResponseDTO[];
}

export interface UpdateCharacterEquipmentResponseDTO
  extends Pick<CharacterEquipmentDTO, '_id' | 'id' | 'slot' | 'itemId' | 'characterId'> {}

export interface UpdateCharacterEquipmentResponse {
  characterEquipment: UpdateCharacterEquipmentResponseDTO;
}

export type CharacterEquipmentUnequipResponse = {};
