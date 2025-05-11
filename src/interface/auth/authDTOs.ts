import { AccountDTO } from '../account/accountDTOs';
import { CommonErrorResponse } from '../API/commonResponse';

//LOGIN
export interface AuthLoginRequestDTO
  extends Pick<AccountDTO, 'password' | 'email'> {}

export interface AuthLoginResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username'> {}

export type AuthLoginResponse =
  | { success: true; account: AuthLoginResponseDTO }
  | CommonErrorResponse;

//STATUS
export type AuthStatusResponse =
  | { success: true; authenticated: boolean }
  | CommonErrorResponse;
