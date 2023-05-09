export interface CommonItemParams {
  name: string;
  itemType: ItemType;
  sellValue?: number;
  quality?: ItemQuality;
  maxStack?: number;
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
