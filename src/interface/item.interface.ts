import { Types } from 'mongoose';

export interface CommonItemParams {
  itemId: number;
  name: string;
  itemType: ItemType;
  maxAmount: number;
  sellValue?: number;
  quality?: ItemQuality;
  icon?: string;
}

export enum ItemQuality {
  COMMON = 'COMMON',
  UNCOMMON = 'UNCOMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY'
}

export enum ItemType {
  EQUIPMENT = 'EQUIPMENT',
  REAGENT = 'REAGENT'
}
