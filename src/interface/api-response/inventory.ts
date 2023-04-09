import { Types } from 'mongoose';

export interface Response_Inventory_POST {
  succes: boolean;
  inventory: {
    inventoryId: Types.ObjectId;
  };
}