import { AttributeName } from '../attribute/attribute';

export interface Enemy {
  _id: number;
  name: string;
  type: EnemyTypes;
  attributes: EnemyAttribute[];
}

export interface EnemyAttribute {
  attributeName: AttributeName;
  value: number;
}

export enum EnemyTypes {
  BEAST = 'Beast',
  HUMANOID = 'Humanoid',
  DEMON = 'Demon'
}