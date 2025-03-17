import { ParsedQs } from 'qs';
import { ParamsDictionary } from 'express-serve-static-core';

import {
  CharacterEquipmentFrontend,
  EquipmentSlot,
} from './characterEquipment';

export interface ListCharacterEquipmentsRequestQuery extends ParsedQs {
  characterId?: string;
  itemSlot?: EquipmentSlot;
  populateItem?: string;
}

export interface CreateCharacterEquipmentRequestBody {
  characterEquipment:
    | Pick<
        CharacterEquipmentFrontend,
        'characterId' | 'itemId' | 'slot' | 'uiPosition'
      >
    | Pick<
        CharacterEquipmentFrontend,
        'characterId' | 'itemId' | 'slot' | 'uiPosition'
      >[];
}

export interface UpdateCharacterEquipmentRequestParams
  extends ParamsDictionary {
  characterEquipmentId: string;
}
