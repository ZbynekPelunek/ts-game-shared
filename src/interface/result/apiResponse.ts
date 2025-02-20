import {
  Common_Response_Success,
  Common_Response_Error,
} from '../API/commonResponse';
import { ResultDTO, ResultFrontend } from './result';

export interface Result_GET_all extends Common_Response_Success {
  results: ResultFrontend[];
}

export interface Result_GET_one extends Common_Response_Success {
  result: ResultFrontend;
}

export interface Result_POST extends Common_Response_Success {
  result: ResultDTO;
}

export type Response_Result_POST = Result_POST | Common_Response_Error;
export type Response_Result_GET_all = Result_GET_all | Common_Response_Error;
export type Response_Result_GET_one = Result_GET_one | Common_Response_Error;
