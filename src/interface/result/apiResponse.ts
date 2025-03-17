import {
  Common_Response_Success,
  Common_Response_Error,
} from '../API/commonResponse';
import { ResultDTO, ResultFrontend } from './result';

export interface ListResults extends Common_Response_Success {
  results: ResultFrontend[];
}

export interface GetResult extends Common_Response_Success {
  result: ResultFrontend;
}

export interface CreateResult extends Common_Response_Success {
  result: ResultDTO;
}

export type CreateResultResponse = CreateResult | Common_Response_Error;
export type ListResultsResponse = ListResults | Common_Response_Error;
export type GetResultResponse = GetResult | Common_Response_Error;
