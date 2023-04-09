import { API_Response_Error } from '../error.interface';

export interface Common_Response_Success {
  success: true;
}

export interface Common_Response_Error {
  success: false;
  error: API_Response_Error[] | unknown;
}