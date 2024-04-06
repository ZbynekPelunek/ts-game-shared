import { AdventureTypes } from './adventure';

export interface Request_Adventure_GET_all_query {
  populateReward?: boolean;
  adventureLevel?: number;
  type?: AdventureTypes;
  limit?: number;
}

export interface Request_Adventure_GET_one_params {
  adventureId: number;
}