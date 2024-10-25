import { CurrencyId } from "../currency/currency";

export interface CommonItemParams {
  icon: string;
  itemId: number;
  name: string;
  itemType: ItemType;
  sell: {
    value: number;
    currencyId: CurrencyId;
  };
  maxAmount?: number;
  quality?: ItemQuality;
}

export enum ItemQuality {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  EPIC = "EPIC",
  LEGENDARY = "LEGENDARY",
}

export enum ItemType {
  EQUIPMENT = "EQUIPMENT",
  REAGENT = "REAGENT",
}
