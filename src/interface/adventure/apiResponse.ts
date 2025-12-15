import { Adventure } from './adventure';

export interface ListAdventuresResponse {
  adventures: Adventure[];
}

export interface GetAdventureResponse {
  adventure: Adventure;
}
