export interface AdventureStats {
  completions: number;
  minRounds: number | null;
  maxRounds: number | null;
  totalRounds: number;
}

export interface CharacterStatsDTO {
  characterId: string;
  adventureStats: Record<number, AdventureStats>;
  itemsReceived: Record<number, number>;
}
