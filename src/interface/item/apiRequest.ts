import { ParamsDictionary } from 'express-serve-static-core';

export interface GetItemRequestParams extends ParamsDictionary {
  itemId: string;
}
