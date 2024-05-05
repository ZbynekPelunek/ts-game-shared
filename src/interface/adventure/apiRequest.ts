import { Common_Request_GET_all } from '../API/commonRequest';
import { AdventureTypes } from './adventure';

export interface Request_Adventure_GET_all_query extends Common_Request_GET_all {
  populateReward?: boolean;
  adventureLevel?: number;
  type?: AdventureTypes;
}

export interface Request_Adventure_GET_one_params {
  adventureId: number;
}