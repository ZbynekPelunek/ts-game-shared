import { ResultDTO, ResultFrontend } from './result';

export interface ListResultsResponse {
  results: ResultFrontend[];
}

export interface GetResultResponse {
  result: ResultFrontend;
}

export interface CreateResultResponse {
  result: ResultDTO;
}
