import { Guid } from 'guid-typescript';

import { AdventureResult } from './adventures.interface';

export interface Account {
  _id: Guid;
  username: string;
  email: string;
  password: string;
  level: number;
  createdAt: Date;
  updatedAt: Date;
  characters: [{ _id: Guid }]
  adventureResults: [{ _id: Guid }]
  // adventureResults: AdventureResult[];
}