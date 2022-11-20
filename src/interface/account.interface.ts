import { AdventureResult } from './adventures.interface';

export interface Account {
  accountId: string;
  level: number;
  dateCreated: Date;
  dateUpdated: Date;
  adventureResults: AdventureResult[];
}