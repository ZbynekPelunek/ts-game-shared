import { Guid } from 'guid-typescript';

import { IAdventure } from './adventures.interface';
import { AttributeType, CharacterAttribute } from './attribute.interface';
import { Currency } from './currency.interface';
import { Inventory } from './inventory.interface';
import { EquipableItem, EquipmentSlot, StatName } from './item.interface';

export interface ICharacter {
  accountId: Guid;
  _id: Guid;
  name: string;
  level: number;
  currentExperience: number;
  maxExperience: number;
  attributes: CharacterAttribute[];
  equipmentSlots: EquipmentSlotsArr;
  inventoryId: Guid;
  adventures: CharacterAdventure[];
  currencies: Currency[];
  createdAt: Date;
  updatedAt: Date;
}

interface CharacterAdventure {
  adventureId: number;
}

export type EquipmentSlotsArr = [
  {
    slot: EquipmentSlot.ARMOR;
    equipment: EquipableItem | null;
  },
  {
    slot: EquipmentSlot.WEAPON;
    equipment: EquipableItem | null;
  }
];

export enum CharacterActions {
  EQUIP_ITEM = 'EQUIP_ITEM',
  UNEQUIP_ITEM = 'UNEQUIP_ITEM',
  SELL = 'SELL'
}

export interface Currencies {
  gold: string;
  cheating_currency: string;
}

export interface StatsParams {
  label: string;
  basicValue: number;
  addedValue: number;
  totalValue: number;
  internalName: StatName;
  type: AttributeType;
  description?: string;
  percent?: boolean;
}

export { Inventory };
