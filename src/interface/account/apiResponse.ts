import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';
import { Account } from './account';

export interface Account_POST extends Common_Response_Success {
  account: Omit<Account, 'password'>;
}

export interface Account_PATCH extends Common_Response_Success {
  account: Omit<Account, 'password'>;
}

export type Response_Account_POST = Account_POST | Common_Response_Error;
export type Response_Account_PATCH = Account_PATCH | Common_Response_Error;