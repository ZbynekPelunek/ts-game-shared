import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';
import { Enemy } from './enemy';

export interface Enemy_GET_all extends Common_Response_Success {
  enemies: Enemy[];
}

export interface Enemy_GET_one extends Common_Response_Success {
  enemy: Enemy;
}

export type Response_Enemy_GET_all = Enemy_GET_all | Common_Response_Error;
export type Response_Enemy_GET_one = Enemy_GET_one | Common_Response_Error;