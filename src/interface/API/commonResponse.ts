import { ApiErrorResponse } from './error';

export interface CommonSuccessResponse {}

export interface CommonErrorResponse {
  error: ApiErrorResponse;
}
