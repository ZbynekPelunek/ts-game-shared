import { ParamsDictionary } from 'express-serve-static-core';

import { Account } from '../../../../backend/src/interfaces/account';
import { CommonErrorResponse } from '../API/commonResponse';

export interface AccountDTO
  extends Pick<Account, 'username' | 'email' | 'password' | 'accountLevel'> {
  readonly _id: string;
  accountLevel: number;
}

//LIST
export type ListAccountsResponseDTO =
  | {
      success: true;
      accounts: Pick<AccountDTO, '_id'>[];
    }
  | CommonErrorResponse;

//GET ONE
export interface GetAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export type GetAccountResponseDTO =
  | {
      success: true;
      account: Pick<AccountDTO, '_id'>;
    }
  | CommonErrorResponse;

//CREATE
export interface CreateAccountRequestDTO
  extends Pick<AccountDTO, 'username' | 'password' | 'email'> {}

export type CreateAccountResponseDTO =
  | { success: true; account: Pick<AccountDTO, '_id' | 'email' | 'username'> }
  | CommonErrorResponse;

//UPDATE
export interface UpdateAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export interface UpdateAccountRequestDTO
  extends Partial<
    Pick<AccountDTO, 'username' | 'password' | 'email' | 'accountLevel'>
  > {}

export type UpdateAccountResponseDTO =
  | {
      success: true;
      account: Pick<AccountDTO, '_id' | 'username' | 'email' | 'accountLevel'>;
    }
  | CommonErrorResponse;

//DELETE
export interface DeleteAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export type DeleteAccountResponseDTO = { success: true } | CommonErrorResponse;
