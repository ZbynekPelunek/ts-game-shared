import { Adventure } from '../adventure/adventure.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface Adventures_GET_all extends Common_Response_Success {
  adventures: Adventure[];
}

export interface Adventures_GET_one extends Common_Response_Success {
  adventure: Adventure;
}

export type Response_Adventures_GET_all = Adventures_GET_all | Common_Response_Error;
export type Response_Adventures_GET_one = Adventures_GET_one | Common_Response_Error;