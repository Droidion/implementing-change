/**
 * Описание и характеристики персонажа
 */
export interface Character {
  id: string
  name: string
  title: string
  age: number
  description: string[]
  support: number
  titleSort: number
}

export enum CharId {
  President = 'president',
  Mentor = 'mentor',
  FinanceVp = 'financeVp',
  ProductionVp = 'productionVp',
  DevelopmentVp = 'developmentVp',
  SecurityChief = 'securityChief',
  AuditChief = 'auditChief',
  FinanceDirector = 'financeDirector',
  Accountant = 'accountant',
  ProductionChief = 'productionChief',
  SalesDirector = 'salesDirector',
  FactoryDirector = 'factoryDirector',
  LogisticsDirector = 'logisticsDirector',
  SalesDeputy = 'salesDeputy',
  SupplyDeputy = 'supplyDeputy',
  HrDirector = 'hrDirector',
  PrDirector = 'prDirector',
  NewspaperEditor = 'newspaperEditor',
  MarketingChief = 'marketingChief',
  ItChief = 'itChief',
  ChiefOfStaff = 'chiefOfStaff',
  LegalChief = 'legalChief',
  RndDeputy = 'rndDeputy',
  ItSupportChief = 'itSupportChief',
  ImplementationChief = 'implementationChief',
  AnalysisChief = 'analysisChief',
}
