import { Types } from "mongoose";
import { CommonItemParams } from "../../item/item";

export interface CommonInventoryParams {
  slot: number;
  item?: InventoryItem | null;
}

export interface InventoryBackend extends CommonInventoryParams {
  _id?: Types.ObjectId;
  characterId: Types.ObjectId;
}

export interface InventoryFrontend extends CommonInventoryParams {
  _id: string;
  characterId: string;
}

export interface InventoryItem {
  itemId: number | CommonItemParams;
  amount: number;
}

export enum InventoryPostActions {
  NEW = "createNew",
  ADD_ITEM = "addItem",
}

export enum InventoryPatchActions {
  SELL_ITEM = "sellItem",
}
