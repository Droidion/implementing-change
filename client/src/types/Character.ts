/**
 * Описание и характеристики персонажа
 */
export interface Character {
  id: string;
  name: string;
  title: string;
  age: number;
  description: string[];
  support: number;
}
