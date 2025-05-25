import { ParsedQs } from 'qs';
import type { ParamsDictionary } from 'express-serve-static-core';

import { EquipmentSlot } from './characterEquipment';

export interface ListCharacterEquipmentsRequestQuery extends ParsedQs {
  characterId?: string;
  itemSlot?: EquipmentSlot;
  populateItem?: string;
}

export interface UpdateCharacterEquipmentRequestParams
  extends ParamsDictionary {
  characterEquipmentId: string;
}
