import { ApiErrorResponse } from './error';

export interface CommonSuccessResponse {
  success: true;
}

export interface CommonErrorResponse {
  success: false;
  error: ApiErrorResponse;
}
