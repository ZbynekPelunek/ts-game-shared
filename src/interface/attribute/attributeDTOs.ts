import { ParamsDictionary } from 'express-serve-static-core';
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

export interface ListAttributesResponse {
  attributes: ListAttributesResponseDTO[];
}

//GET ONE
export interface GetAttributeRequestParams extends ParamsDictionary {
  attributeId: string;
}

export interface GetAttributeResponseDTO
  extends Pick<
    AttributeDTO,
    'label' | 'attributeName' | 'isPercent' | 'desc'
  > {}

export interface GetAttributeResponse {
  attribute: GetAttributeResponseDTO;
}
