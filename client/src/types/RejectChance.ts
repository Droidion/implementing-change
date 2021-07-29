export interface RejectChance {
  // Шанс что будет отказ (от 0 до 1)
  chance: number;
  // Реплика персонажа об отказе
  reply: string;
  period: number;
  eventCode: string;
  characterId: string;
}
