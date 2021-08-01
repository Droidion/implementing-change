/**
 * Описание и характеристики персонажа
 */
export interface Character {
  id: CharId
  name: string
  title: string
  age: number
  description: string[]
  support: number
  titleSort: number
}

export type CharId =
  | 'president'
  | 'mentor'
  | 'financeVp'
  | 'productionVp'
  | 'developmentVp'
  | 'securityChief'
  | 'auditChief'
  | 'financeDirector'
  | 'accountant'
  | 'productionChief'
  | 'salesDirector'
  | 'factoryDirector'
  | 'logisticsDirector'
  | 'salesDeputy'
  | 'supplyDeputy'
  | 'hrDirector'
  | 'prDirector'
  | 'newspaperEditor'
  | 'marketingChief'
  | 'itChief'
  | 'chiefOfStaff'
  | 'legalChief'
  | 'rndDeputy'
  | 'itSupportChief'
  | 'implementationChief'
  | 'analysisChief'
