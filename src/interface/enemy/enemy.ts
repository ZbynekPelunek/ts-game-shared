import { Document } from 'mongoose';

import { AttributeName } from '../attribute/attribute';

interface Enemy {
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
  DEMON = 'Demon',
}

export interface EnemyMongooseSchema extends Enemy {}
export interface EnemyDocument extends Enemy, Document<number> {}

export interface EnemyDTO
  extends Pick<Enemy, '_id' | 'attributes' | 'name' | 'type'> {}
