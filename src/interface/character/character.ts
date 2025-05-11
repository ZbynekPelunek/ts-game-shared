export interface Character {
  name: string;
  level: number;
  characterClass: CharacterClass;
  race: CharacterRace;
  currentExperience: number;
  maxExperience: number;
}

export enum CharacterRace {
  HUMAN = 'Human'
}

export enum CharacterClass {
  WARRIOR = 'Warrior'
}

export enum CharacterActions {
  EQUIP_ITEM = 'EQUIP_ITEM',
  UNEQUIP_ITEM = 'UNEQUIP_ITEM',
  SELL = 'SELL'
}
