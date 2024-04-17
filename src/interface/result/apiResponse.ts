import { Common_Response_Success, Common_Response_Error } from '../API/commonResponse';

export interface Result_POST extends Common_Response_Success {
  result: {
    resultId: string;
    timeStart: string;
    timeFinish: string;
  };
}

export type Response_Result_POST = Result_POST | Common_Response_Error;