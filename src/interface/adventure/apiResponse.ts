import { Adventure } from './adventure';
import {
  Common_Response_Error,
  Common_Response_Success,
} from '../API/commonResponse';

export interface ListAdventures extends Common_Response_Success {
  adventures: Adventure[];
}

export interface GetAdventure extends Common_Response_Success {
  adventure: Adventure;
}

export type ListAdventuresResponse = ListAdventures | Common_Response_Error;
export type GetAdventureResponse = GetAdventure | Common_Response_Error;
