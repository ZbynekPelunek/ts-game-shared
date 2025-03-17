import { ParsedQs } from 'qs';

export interface CommonListRequestQuery extends ParsedQs {
  limit?: string;
}
