import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';
import { Account } from './account';

export interface CreateAccount extends Common_Response_Success {
  account: Pick<Account, 'id' | 'email' | 'level' | 'username'>;
}

export interface UpdateAccount extends Common_Response_Success {
  account: Pick<Account, 'id'>;
}

export type CreateAccountResponse = CreateAccount | Common_Response_Error;
export type UpdateAccountResponse = UpdateAccount | Common_Response_Error;
