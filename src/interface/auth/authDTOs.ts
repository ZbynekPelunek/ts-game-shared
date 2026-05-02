import { AccountDTO } from '../account/accountDTOs';

//LOGIN
export interface AuthLoginRequestDTO
  extends Pick<AccountDTO, 'password' | 'email'> {}

export interface AuthLoginResponseDTO
  extends Pick<AccountDTO, '_id' | 'email' | 'username'> {}

export interface AuthLoginResponse {
  token: string;
  account: AuthLoginResponseDTO;
}

//STATUS
export interface AuthStatusResponse {
  authenticated: boolean;
}
