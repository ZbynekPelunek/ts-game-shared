import { Adventure } from './adventure';
import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';

export interface Adventure_GET_all extends Common_Response_Success {
  adventures: Adventure[];
}

export interface Adventure_GET_one extends Common_Response_Success {
  adventure: Adventure;
}

export type Response_Adventure_GET_all = Adventure_GET_all | Common_Response_Error;
export type Response_Adventure_GET_one = Adventure_GET_one | Common_Response_Error;