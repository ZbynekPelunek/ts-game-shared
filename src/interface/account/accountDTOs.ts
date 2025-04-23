import { ParamsDictionary } from 'express-serve-static-core';

import { Account } from '../../../../backend/src/interfaces/account';
import { CommonErrorResponse } from '../API/commonResponse';

export interface AccountDTO
  extends Pick<Account, 'username' | 'email' | 'password' | 'accountLevel'> {
  readonly _id: string;
  accountLevel: number;
}

//LIST
export interface ListAccountsResponseDTO extends Pick<AccountDTO, '_id'> {}

export type ListAccountsResponse =
  | {
      success: true;
      accounts: ListAccountsResponseDTO[];
    }
  | CommonErrorResponse;

//GET ONE
export interface GetAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export interface GetAccountResponseDTO extends Pick<AccountDTO, '_id'> {}

export type GetAccountResponse =
  | {
      success: true;
      account: GetAccountResponseDTO;
    }
  | CommonErrorResponse;

//CREATE
export interface CreateAccountRequestDTO
  extends Pick<AccountDTO, 'username' | 'password' | 'email'> {}

export interface CreateAccountResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username'> {}

export type CreateAccountResponse =
  | { success: true; account: CreateAccountResponseDTO }
  | CommonErrorResponse;

//LOGIN
export interface LoginAccountRequestDTO
  extends Pick<AccountDTO, 'password' | 'email'> {}

export interface LoginAccountResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username'> {}

export type LoginAccountResponse =
  | { success: true; account: LoginAccountResponseDTO }
  | CommonErrorResponse;

//UPDATE
export interface UpdateAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export interface UpdateAccountRequestDTO
  extends Partial<
    Pick<AccountDTO, 'username' | 'password' | 'email' | 'accountLevel'>
  > {}

export interface UpdateAccountResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username' | 'accountLevel'> {}

export type UpdateAccountResponse =
  | {
      success: true;
      account: UpdateAccountResponseDTO;
    }
  | CommonErrorResponse;

//DELETE
export interface DeleteAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export type DeleteAccountResponse = { success: true } | CommonErrorResponse;
