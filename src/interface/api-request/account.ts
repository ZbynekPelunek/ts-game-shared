export interface Request_Account_POST {
  username: string;
  email: string;
  password: string;
}

export interface Request_Account_POST_Characters_params {
  accountId: string;
}
export interface Request_Account_POST_Characters_body {
  characterId: string;
}