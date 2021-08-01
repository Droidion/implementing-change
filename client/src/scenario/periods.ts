import { Period } from '../types/Period'

/**
 * Параметры игровых периодов с требованиями по переходу в следующий период.
 */
export const periods: Period[] = [
  {
    period: 1,
    needSupporters: {
      moderate: 10,
      active: 1,
    },
    needEvents: [
      {
        id: 'informationAnalysis',
        minChars: 0,
      },
      {
        id: 'meetingTopManager',
        minChars: 3,
      },
      {
        id: 'employeesInterview',
        minChars: 0,
      },
      {
        id: 'meetingColleagues',
        minChars: 9,
      },
    ],
  },
  {
    period: 2,
    needSupporters: {
      moderate: 12,
      active: 2,
    },
    needEvents: [
      {
        id: 'corporateArticle',
        minChars: 0,
      },
      {
        id: 'teamBuildingTraining',
        minChars: 4,
      },
      {
        id: 'employeePrivateMeeting',
        minChars: 2,
      },
    ],
  },
  {
    period: 3,
    needSupporters: {
      moderate: 14,
      active: 4,
    },
    needEvents: [
      {
        id: 'brainStorm',
        minChars: 5,
      },
      {
        id: 'privateEmail',
        minChars: 3,
      },
    ],
  },
  {
    period: 4,
    needSupporters: {
      moderate: 20,
      active: 14,
    },
    needEvents: [
      {
        id: 'orderingBusinessProcesses',
        minChars: 0,
      },
      {
        id: 'learningEvent',
        minChars: 3,
      },
      {
        id: 'topManagementSession',
        minChars: 0,
      },
      {
        id: 'roadShow',
        minChars: 0,
      },
    ],
  },
  {
    period: 5,
    needSupporters: {
      moderate: 18,
      active: 15,
    },
    needEvents: [
      {
        id: 'changeIncentiveSystem',
        minChars: 0,
      },
      {
        id: 'developingKpi',
        minChars: 0,
      },
      {
        id: 'developingNewOrgStructure',
        minChars: 0,
      },
      {
        id: 'orderingBusinessProcesses',
        minChars: 0,
      },
    ],
  },
  {
    period: 6,
    needSupporters: {
      moderate: 25,
      active: 22,
    },
    needEvents: [
      {
        id: 'corporateArticle',
        minChars: 0,
      },
      {
        id: 'includeReserve',
        minChars: 0,
      },
      {
        id: 'niceLetter',
        minChars: 0,
      },
      {
        id: 'payingBonuses',
        minChars: 0,
      },
    ],
  },
  {
    period: 7,
    needSupporters: {
      moderate: 25,
      active: 25,
    },
    needEvents: [
      {
        id: 'externalConference',
        minChars: 0,
      },
      {
        id: 'projectReport',
        minChars: 0,
      },
      {
        id: 'externalMediaArticle',
        minChars: 0,
      },
      {
        id: 'privateMeeting',
        minChars: 3,
      },
    ],
  },
]
