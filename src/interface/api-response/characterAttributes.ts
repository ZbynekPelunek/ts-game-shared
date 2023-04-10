import { Types } from 'mongoose';

import { CharacterAttributeFrontend } from '../character/attribute.interface';
import { Common_Response_Error, Common_Response_Success } from './common';

export interface CharacterAttributes_GET_all extends Common_Response_Success {
  characterAttributes: CharacterAttributeFrontend[];
}

export interface CharacterAttributes_POST extends Common_Response_Success {
  characterAttributes: Types.ObjectId[];
}

export type Response_CharacterAttributes_POST = CharacterAttributes_POST | Common_Response_Error;
export type Response_CharacterAttributes_GET_all = CharacterAttributes_GET_all | Common_Response_Error;