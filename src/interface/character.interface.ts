import { Guid } from 'guid-typescript';

import { IAdventure } from './adventures.interface';
import { Currency } from './currency.interface';
import { EquipableItem, EquipmentSlot, InventoryItem, StatName } from './item.interface';

export interface ICharacter {
  accountId: Guid | string;
  _id: Guid | string;
  name: string;
  level: number;
  currentExperience: number;
  maxExperience: number;
  stats: CharacterStats;
  equipmentSlots: EquipmentSlotsArr;
  inventory: Inventory[];
  maxInventorySlots: number;
  adventures: IAdventure[];
  currencies: Currency[];
  createdAt: Date | string;
  updatedAt: Date | string;
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

export interface Inventory {
  _id?: Guid;
  item: InventoryItem | null;
}

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
  type: StatType;
  description?: string;
  percent?: boolean;
}

export interface CharacterStats {
  Health: StatsParams;
  Power: StatsParams;
  Agility: StatsParams;
  Strength: StatsParams;
  Intellect: StatsParams;
  Stamina: StatsParams;
  Armor: StatsParams;
  Min_Damage: StatsParams;
  Max_Damage: StatsParams;
  Crit_Rating: StatsParams;
  Crit_Chance: StatsParams;
  Crit_Power: StatsParams;
  Percent_Damage_Increase: StatsParams;
  Bonus_Experience: StatsParams;
  Percent_Experience_Increase: StatsParams;
}

export enum StatType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  MISC = 'MISC'
}