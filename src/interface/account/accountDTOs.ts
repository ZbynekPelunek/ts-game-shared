import { ParamsDictionary } from 'express-serve-static-core';

import { Account } from './account';

export interface AccountDTO
  extends Pick<Account, 'username' | 'email' | 'password' | 'accountLevel'> {
  readonly _id: string;
  accountLevel: number;
}

//LIST
export interface ListAccountsResponseDTO extends Pick<AccountDTO, '_id'> {}

export interface ListAccountsResponse {
  accounts: ListAccountsResponseDTO[];
}

//GET ONE
export interface GetAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export interface GetAccountResponseDTO extends Pick<AccountDTO, '_id'> {}

export interface GetAccountResponse {
  account: GetAccountResponseDTO;
}

//CREATE
export interface CreateAccountRequestDTO
  extends Pick<AccountDTO, 'username' | 'password' | 'email'> {}

export interface CreateAccountResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username'> {}

export interface CreateAccountResponse {
  account: CreateAccountResponseDTO;
}

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

export interface UpdateAccountResponse {
  account: UpdateAccountResponseDTO;
}

//DELETE
export interface DeleteAccountRequestParams extends ParamsDictionary {
  accountId: string;
}

export type DeleteAccountResponse = {};
