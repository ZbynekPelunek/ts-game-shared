import { Types, Document } from 'mongoose';

export interface Account {
  email: string;
  password: string;
  username: string;
  accountLevel?: number;
}

export interface AccountDocument
  extends Account,
    Document<Types.ObjectId, {}, Account> {}
