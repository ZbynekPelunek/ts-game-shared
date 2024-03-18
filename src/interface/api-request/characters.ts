export interface Request_Characters_GET_one_params {
  characterId: string;
}

export interface Request_Characters_GET_one_query {
  populateInventory: boolean;
}

export interface Request_Characters_POST_body {
  accountId: string;
  name: string;
}