import { ParsedQs } from 'qs';
import type { ParamsDictionary } from 'express-serve-static-core';

import { EquipmentSlot } from './characterEquipment';
import { CharacterEquipmentDTO } from './characterEquipmentDTOs';

export interface ListCharacterEquipmentsRequestQuery extends ParsedQs {
  characterId?: string;
  itemSlot?: EquipmentSlot;
  populateItem?: string;
  orderBy?: 'id';
}

export interface UpdateCharacterEquipmentRequestParams
  extends ParamsDictionary {
  characterEquipmentId: string;
}

export interface CreateCharacterEquipmentRequestDTO
  extends Pick<CharacterEquipmentDTO, 'id' | 'slot' | 'characterId' | 'itemId'> {}

export interface UpdateCharacterEquipmentRequestDTO
  extends Partial<Pick<CharacterEquipmentDTO, 'itemId'>> {}
