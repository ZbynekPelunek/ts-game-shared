import { ApiErrorResponse } from './error';

export interface CommonSuccessResponse {}

export interface CommonErrorResponse {
  success: false;
  error: ApiErrorResponse;
}
