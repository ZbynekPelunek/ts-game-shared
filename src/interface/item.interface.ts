// interface IItem {
//   itemId: string;
//   name: string;
//   equipped: boolean;
//   sellValue: string;
//   positionIndex?: number;
//   quality?: ItemQuality;
//   itemLevel?: number;
//   levelReq?: number;
// }

// export interface IPotion extends IItem {
//   itemType: ItemType.POTION,
//   maxStack: number;
//   stats: ItemStat[];
// }

// interface IEquipment extends IItem {
//   itemType: ItemType.EQUIPMENT;
//   statsEffects: {
//     default: ItemStat[];
//     rolledAffixes: ItemStat[];
//   }
// }

// export interface IArmor extends IEquipment {
//   slot: EquipmentSlot.ARMOR;
//   Armor: number;
//   armorType: ArmorType,
// }

// export interface IWeapon extends IEquipment {
//   slot: EquipmentSlot.WEAPON;
//   Min_Damage: number;
//   Max_Damage: number;
//   weaponType: WeaponType;
// }

// export type EquipableItem = IArmor | IWeapon;
// export type InventoryItem = EquipableItem | IPotion;

// export enum ItemType {
//   EQUIPMENT = 'EQUIPMENT',
//   POTION = 'POTION'
// }

// export enum ItemQuality {
//   COMMON = 'COMMON',
//   UNCOMMON = 'UNCOMMON',
//   RARE = 'RARE',
//   EPIC = 'EPIC',
//   LEGENDARY = 'LEGENDARY'
// }

// export enum ArmorType {
//   CLOTH = 'CLOTH',
//   LEATHER = 'LEATHER',
//   PLATE = 'PLATE'
// }

// export enum WeaponType {
//   STAFF = 'STAFF',
//   BOW = 'BOW',
//   AXE = 'AXE'
// }

// export enum EquipmentSlot {
//   WEAPON = 'WEAPON',
//   ARMOR = 'ARMOR'
// }

// export interface ItemStat {
//   statName: StatName;
//   statValue: number;
// }

// export enum StatName {
//   HEALTH = 'HEALTH',
//   POWER = 'POWER',
//   STAMINA = 'STAMINA',
//   AGILITY = 'AGILITY',
//   STRENGTH = 'STRENGTH',
//   INTELLECT = 'INTELLECT',
//   ARMOR = 'ARMOR',
//   MIN_DAMAGE = 'MIN_DAMAGE',
//   MAX_DAMAGE = 'MAX_DAMAGE',
//   CRIT_CHANCE_RATING = 'CRIT_CHANCE_RATING',
//   PERCENT_CRIT_CHANCE = 'PERCENT_CRIT_CHANCE',
//   PERCENT_CRIT_DAMAGE = 'PERCENT_CRIT_DAMAGE',
//   BONUS_EXPERIENCE = 'BONUS_EXPERIENCE',
//   PERCENT_EXPERIENCE = 'PERCENT_EXPERIENCE',
//   PERCENT_HEALTH = 'PERCENT_HEALTH',
//   PERCENT_DAMAGE = 'PERCENT_DAMAGE'
// }
