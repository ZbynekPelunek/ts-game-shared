import { BasicAttribute, BasicAttributeFrontend } from './attribute';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';

export interface ListAttributes extends Common_Response_Success {
  attributes: BasicAttributeFrontend[];
}

export interface GetAttribute extends Common_Response_Success {
  attribute: BasicAttribute;
}

export type ListAttributesResponse = ListAttributes | Common_Response_Error;
export type GetAttributeResponse = GetAttribute | Common_Response_Error;
