import { Types } from 'mongoose';

export interface Account {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  level: number;
  createdAt: Date;
  updatedAt: Date;
  characters: [{ _id: Types.ObjectId }]
  adventureResults: [{ _id: Types.ObjectId }]
  // adventureResults: AdventureResult[];
}