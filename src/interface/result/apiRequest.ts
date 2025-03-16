import { Common_Request_GET_all } from "../API/commonRequest";
import { ResultState } from './result';

export interface Request_Result_GET_all_query extends Common_Request_GET_all {
  characterId?: string;
  state?: ResultState;
}

export interface Request_Result_GET_one_params {
  resultId: string;
}

export interface Request_Result_POST_body {
  characterId: string;
  adventureId: number;
}
