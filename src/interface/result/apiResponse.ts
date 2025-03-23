import {
  CommonSuccessResponse,
  CommonErrorResponse,
} from '../API/commonResponse';
import { ResultDTO, ResultFrontend } from './result';

export interface ListResults extends CommonSuccessResponse {
  results: ResultFrontend[];
}

export interface GetResult extends CommonSuccessResponse {
  result: ResultFrontend;
}

export interface CreateResult extends CommonSuccessResponse {
  result: ResultDTO;
}

export type CreateResultResponse = CreateResult | CommonErrorResponse;
export type ListResultsResponse = ListResults | CommonErrorResponse;
export type GetResultResponse = GetResult | CommonErrorResponse;
