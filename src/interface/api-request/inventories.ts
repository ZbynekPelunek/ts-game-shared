import { Types } from 'mongoose';

export interface Request_Inventories_GET_one_params {
  inventoryId: string;
}

export interface Request_Inventories_POST_body {
  characterId: Types.ObjectId;
}