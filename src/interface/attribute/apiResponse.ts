import { BasicAttribute, BasicAttributeFrontend } from './attribute';
import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';

export interface Attribute_GET_all extends Common_Response_Success {
  attributes: BasicAttributeFrontend[];
}

export interface Attribute_GET_one extends Common_Response_Success {
  attribute: BasicAttribute;
}

export type Response_Attribute_GET_all = Attribute_GET_all | Common_Response_Error;
export type Response_Attribute_GET_one = Attribute_GET_one | Common_Response_Error;