import { BasicAttribute, BasicAttributeFrontend } from './attribute';
import {
  CommonErrorResponse,
  CommonSuccessResponse,
} from '../API/commonResponse';

export interface ListAttributes extends CommonSuccessResponse {
  attributes: BasicAttributeFrontend[];
}

export interface GetAttribute extends CommonSuccessResponse {
  attribute: BasicAttribute;
}

export type ListAttributesResponse = ListAttributes | CommonErrorResponse;
export type GetAttributeResponse = GetAttribute | CommonErrorResponse;
