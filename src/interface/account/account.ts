export interface IAccountSchema {
  username: string;
  email: string;
  password: string;
  level?: number;
}

export interface Account extends IAccountSchema {
  id: string;
  level: number;
}