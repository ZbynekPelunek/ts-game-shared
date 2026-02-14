import { Document } from 'mongoose';

export interface Enemy {
  _id: number;
  name: string;
  type: EnemyTypes;
  attributes: EnemyAttributes;
  effects: number[];
  enemyLevel: number;
  isLive: boolean;
}

export interface EnemyAttributes {
  health: number;
  minimalDamage: number;
  maximalDamage: number;
  armor?: number;
  power?: number;

  agility?: number;
  strength?: number;
  stamina?: number;
  intellect?: number;

  criticalChance?: number;
  criticalDamage?: number;
  multistrikeChance?: number;
  multistrikeHits?: number;
}

export enum EnemyTypes {
  BEAST = 'Beast',
  HUMANOID = 'Humanoid',
  DEMON = 'Demon'
}

export interface EnemyMongooseSchema
  extends Pick<Enemy, '_id' | 'attributes' | 'name' | 'type' | 'effects' | 'enemyLevel' | 'isLive'> {}
export interface EnemyDocument extends Enemy, Document<number> {}

export interface EnemyDTO
  extends Pick<Enemy, '_id' | 'attributes' | 'name' | 'type' | 'effects' | 'enemyLevel' | 'isLive'> {
  attributes: {
    health: number;
    armor: number;
    minimalDamage: number;
    maximalDamage: number;
    power: number;

    agility: number;
    strength: number;
    stamina: number;
    intellect: number;

    criticalChance: number;
    criticalDamage: number;
    multistrikeChance: number;
    multistrikeHits: number;
  };
}

export interface EnemyDTOInternal extends EnemyDTO {
  createdAt: Date;
  updatedAt: Date;
}
