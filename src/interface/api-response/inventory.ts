import { Guid } from 'guid-typescript';

export interface Response_Inventory_POST {
  succes: boolean;
  inventory: {
    inventoryId: Guid;
  };
}