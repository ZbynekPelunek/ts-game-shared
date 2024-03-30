import { CharacterFrontend } from './character';
import { Common_Response_Error, Common_Response_Success } from '../API/commonResponse';

export interface Character_GET_All extends Common_Response_Success {
  characters: CharacterFrontend[]
}

export interface Character_GET_one extends Common_Response_Success {
  character: CharacterFrontend
}

export interface Character_POST extends Common_Response_Success {
  character: CharacterFrontend
}

export type Response_Character_GET_All = Character_GET_All | Common_Response_Error;
export type Response_Character_GET_one = Character_GET_one | Common_Response_Error;
export type Response_Character_POST = Character_POST | Common_Response_Error;
