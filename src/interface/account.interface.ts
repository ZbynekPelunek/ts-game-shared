import { Types } from 'mongoose';

export interface CommonAccountParams {
  username: string;
  email: string;
  password: string;
  level: number;
}

export interface AccountBackend extends CommonAccountParams {
  _id?: Types.ObjectId;
  characters: Types.ObjectId[];
}

export interface AccountFrontend extends CommonAccountParams {
  accountId: string;
  characters: string[];
}