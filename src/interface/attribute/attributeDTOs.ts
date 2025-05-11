import { ParamsDictionary } from 'express-serve-static-core';
import { CommonErrorResponse } from '../API/commonResponse';
import { Attribute } from './attribute';

export interface AttributeDTO
  extends Pick<Attribute, 'label' | 'attributeName' | 'isPercent' | 'desc'> {
  readonly _id: string;
}

//LIST
export interface ListAttributesResponseDTO
  extends Pick<
    AttributeDTO,
    'label' | 'attributeName' | 'isPercent' | 'desc'
  > {}

export type ListAttributesResponse =
  | {
      success: true;
      attributes: ListAttributesResponseDTO[];
    }
  | CommonErrorResponse;

//GET ONE
export interface GetAttributeRequestParams extends ParamsDictionary {
  attributeId: string;
}

export interface GetAttributeResponseDTO
  extends Pick<
    AttributeDTO,
    'label' | 'attributeName' | 'isPercent' | 'desc'
  > {}

export type GetAttributeResponse =
  | {
      success: true;
      attribute: GetAttributeResponseDTO;
    }
  | CommonErrorResponse;
