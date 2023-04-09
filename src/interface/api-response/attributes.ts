import { BasicAttribute } from '../character/attribute.interface';
import { Common_Response_Error, Common_Response_Error_unknown, Common_Response_Success } from './common';

export interface Attributes_GET_all extends Common_Response_Success {
  attributes: BasicAttribute[];
}

export interface Attributes_GET_one extends Common_Response_Success {
  attribute: BasicAttribute;
}

export type Response_Attributes_GET_all = Attributes_GET_all | Common_Response_Error | Common_Response_Error_unknown;
export type Response_Attributes_GET_one = Attributes_GET_one | Common_Response_Error | Common_Response_Error_unknown;