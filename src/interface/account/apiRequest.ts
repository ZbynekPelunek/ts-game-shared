export interface Request_Account_POST_body {
  username: string;
  email: string;
  password: string;
}

export interface Request_Account_PATCH_params {
  accountId: string;
}

export interface Request_Account_PATCH_body {
  characterId: string;
}