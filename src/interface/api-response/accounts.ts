import { Common_Response_Error, Common_Response_Success } from './common';

export interface Accounts_POST extends Common_Response_Success {
  account: {
    accountId: string;
    email: string;
    username: string;
  }
}

export interface Accounts_POST_Characters extends Common_Response_Success {
  account: {
    accountId: string;
  }
}

export type Response_Account_POST = Accounts_POST | Common_Response_Error;
export type Response_Account_POST_Characters = Accounts_POST_Characters | Common_Response_Error;