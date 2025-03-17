import type { ParamsDictionary } from 'express-serve-static-core';

export interface GetAttributeRequestParams extends ParamsDictionary {
  attributeId: string;
}
