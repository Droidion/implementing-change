import { EventType } from '../types/EventType'
import type { Event } from '../types/Event'
import { EventId } from '../types/Event'

/**
 * Список возможных событий, которые может заплонировать игрок.
 */
export const events: Event[] = [
  {
    id: EventId.PrAction,
    name: 'PR акции с символикой проекта',
    length: 5,
    cooldown: 60,
    type: EventType.General,
    description:
      'Подготовка к PR акции с символикой проекта в рамках утвержденного бюджета. Основная цель — информирование сотрудников о проекте и формирование положительного отношения к нему.',
  },
  {
    id: EventId.RoadShow,
    name: 'Road show',
    length: 11,
    cooldown: 90,
    type: EventType.General,
    description:
      'Подготовка и проведение PR-мероприятий в регионах. Разработка презентаций, ответов на вопросы, посвященных проводимым изменениям. Охват поездкой всех регионов присутствия.',
  },
  {
    id: EventId.InformationAnalysis,
    name: 'Анализ информации',
    length: 3,
    cooldown: 14,
    type: EventType.General,
    description:
      'Прежде чем приступить к руководству проектом, Вы решили потратить время на изучение информации, собранной по вашему поручению сотрудниками отдела, проанализировать ключевые моменты и сформировать основные выводы, исходя из полученной информации.',
  },
  {
    id: EventId.IncludeReserve,
    name: 'Включение в кадровый резерв',
    length: 3,
    cooldown: 180,
    type: EventType.General,
    description:
      'Вы выступаете с предложением включить в кадровый резерв сотрудников Компании, принимавших активное участие в проекте.',
  },
  {
    id: EventId.ExternalConference,
    name: 'Выступления на внешних конференциях',
    length: 4,
    cooldown: 40,
    type: EventType.General,
    description:
      'Подготовка презентации о достигнутых результатах и выступление на внешней конференции, посвященной проблемам управления изменениями. Дополнительная цель, которую Вы преследуете — удерживать и развивать лидеров изменений в вашей компании. Включает подготовку и согласование основных тезисов выступления.',
  },
  {
    id: EventId.Memo,
    name: 'Докладная записка',
    length: 1,
    cooldown: 40,
    type: EventType.General,
    description:
      'Вы инициируете докладную записку на имя куратора проекта. Цель — проинформировать куратора о выработанном проектной группой видении проекта. Имейте в виду, что Ваш куратор как правило обсуждает такие документы с другими руководителями.',
  },
  {
    id: EventId.ChangeIncentiveSystem,
    name: 'Изменение системы стимулирования',
    length: 7,
    cooldown: 180,
    type: EventType.General,
    description:
      'Важным элементом внедрения изменений является изменение системы стимулирования персонала (Compensation & Benefits). Совместно с отделом мотивации персонала Вы участвуете в проекте по разработке новой системы мотивации сотрудников на базе разработанных KPI, которая бы стимулировала менеджеров и сотрудников к работе в новых стандартах и условиях.',
  },
  {
    id: EventId.ResearchInformalGroups,
    name: 'Изучение неформальных групп',
    length: 7,
    cooldown: 360,
    type: EventType.General,
    description:
      'Для получения информации о существующих неформальных группах Вы потратите несколько дней, посещая кафе, столовую, занимаясь в спортзале Компании, общаясь с коллегами в  «курилке» и т.п.',
  },
  {
    id: EventId.ExecutiveDecision,
    name: 'Распоряжения по Компании',
    length: 3,
    cooldown: 90,
    type: EventType.General,
    description:
      'Вы инициируете издание распоряжения, нацеленного на закрепление новых структур, регламентов и процессов.',
  },
  {
    id: EventId.ProjectConsulting,
    name: 'Консультирование по проекту',
    length: 5,
    cooldown: 40,
    type: EventType.General,
    description:
      'Вы выделяете в своем рабочем графике время на проведение консультаций для менеджеров функциональных подразделений и рабочих семинаров для сотрудников подразделений, в которых планируется начать внедрение проекта. Основная цель — помочь сотрудникам позитивно принять изменения.',
  },
  {
    id: EventId.CorporateHolidays,
    name: 'Корпоративные праздники',
    length: 8,
    cooldown: 180,
    type: EventType.General,
    description:
      'Вы выступаете инициатором и организуете корпоративное мероприятие, посвященное проводимым изменениям. Основная цель, которую Вы преследуете — информирование о проекте и формирование положительного отношения к нему.',
  },
  {
    id: EventId.DevelopingKpi,
    name: 'Разработка KPI',
    length: 20,
    cooldown: 180,
    type: EventType.General,
    description:
      'Важным элементом процессного управления является разработка ключевых показателей эффективности (KPI) деятельности бизнес-подразделений. Эти показатели используются в системе стимулирования персонала.',
  },
  {
    id: EventId.NiceLetter,
    name: 'Организация поощрительного письма',
    length: 1,
    cooldown: 180,
    type: EventType.General,
    description:
      'Вы пишете и распространяете благодарственное письмо для поощрения наиболее активных участников рабочей группы и активных сторонников проекта. Основная цель — поощрение нового поведения.',
  },
  {
    id: EventId.ProjectReport,
    name: 'Комплексный отчет по результатам проекта',
    length: 10,
    cooldown: 360,
    type: EventType.General,
    description:
      'Основная цель данного отчета — информировать сотрудников о комплексности изменений, увязать процессный подход с положением компании на рынке, с новой системой оценки деятельности и оплаты труда, с возможностями карьерного и профессионального роста. Отчет также обобщает опыт, накопленный рабочей группой в ходе реализации проекта.',
  },
  {
    id: EventId.TopManagementSession,
    name: 'Выступление на совещании топ-менеджеров',
    length: 2,
    cooldown: 60,
    type: EventType.General,
    description:
      'В повестку дня ближайшего совещания топ-менеджеров и рабочих комитетов (Внутренний аудит, Управляющий совет, Совет по технической политике) включено Ваше выступление о ходе реализации проекта. Вы готовите презентацию.',
  },
  {
    id: EventId.PayingBonuses,
    name: 'Премирование сотрудников',
    length: 1,
    cooldown: 180,
    type: EventType.General,
    description: 'Вы инициируете приказ о поощрении наиболее активных участников рабочих групп.',
  },
  {
    id: EventId.EmployeesInterview,
    name: 'Опрос сотрудников',
    length: 7,
    cooldown: 90,
    type: EventType.General,
    description:
      'Основной целью проведения опроса являются формирование положительного отношения к проводимым изменениям и демонстрация Вашего интереса к мнению сотрудников.',
  },
  {
    id: EventId.PostingNews,
    name: 'Размещение новостей в локальной сети и ответы на вопросы',
    length: 1,
    cooldown: 10,
    type: EventType.General,
    description:
      'Вы организуете и поддерживаете форум на сайте Компании, где в режиме онлайн отвечаете на вопросы сотрудников (в том числе, реагируете и на негативную информацию) и стимулируете открытый обмен мнениями по переходу компании на процессное управление. Также вы занимаетесь анализом поступившей информации.',
  },
  {
    id: EventId.CorporateArticle,
    name: 'Статья в корпоративной прессе',
    length: 2,
    cooldown: 40,
    type: EventType.General,
    description:
      'Вы обращаетесь к главному редактору с просьбой разместить вашу статью в корпоративном издании. Заметьте, что все топ-менеджеры читают корпоративный журнал, который издается один раз в месяц. Все сотрудники компании с удовольствием читают и обсуждают корпоративную прессу (еженедельная газета).',
  },
  {
    id: EventId.DevelopingNewOrgStructure,
    name: 'Разработка новой организационной структуры',
    length: 15,
    cooldown: 360,
    type: EventType.General,
    description:
      'Важным элементом внедрения изменений является разработка новой организационной структуры, поддерживающей новые процессы. Эта инициатива затрагивает практически все функциональные блоки, и ее реализация займет много времени.',
  },
  {
    id: EventId.SendingNewsletter,
    name: 'Рассылка информационного письма',
    length: 1,
    cooldown: 20,
    type: EventType.General,
    description:
      'Подготовка и рассылка краткого информационного письма по электронной почте. Вы можете информировать о любых этапах прохождения проекта. Основная цель — информирование о целях, результатах и ходе продвижения проекта. Заметьте, все сотрудники имеют индивидуальный электронный адрес.',
  },
  {
    id: EventId.OrderingBusinessProcesses,
    name: 'Создание регламентов бизнес-процессов',
    length: 17,
    cooldown: 360,
    type: EventType.General,
    description:
      'Важным элементом внедрения изменений является создание регламентов бизнес-процессов. Основная цель — закрепление новых структур и процессов. Поскольку эта инициатива затрагивает практически все функциональные блоки, для ее реализации вашей компании потребуется длительное время.',
  },
  {
    id: EventId.CreatingWebsite,
    name: 'Создание сайта проекта',
    length: 5,
    cooldown: 360,
    type: EventType.General,
    description:
      'Сайт создается в локальной сети компании. К нему имеют доступ все сотрудники, независимо от их расположения. Имейте в виду, если Вашим сайтом не заинтересовались сотрудники компании, то служба IT принимает решение о выводе его из эксплуатации.',
  },
  {
    id: EventId.ExternalMediaArticle,
    name: 'Статья во внешних источниках информации',
    length: 3,
    cooldown: 90,
    type: EventType.General,
    description:
      'Вы готовите статью, посвященную проблемам управления изменениями, и договариваетесь о размещении ее в СМИ для информирования о достигнутых результатах.',
  },

  {
    id: EventId.MeetingColleagues,
    name: 'Знакомство с коллегами',
    length: 0.3,
    cooldown: 360,
    type: EventType.Individual,
    description:
      'Как новому сотруднику Компании для налаживания конструктивных отношений Вам полезно лично познакомиться с Вашими новыми коллегами.',
  },
  {
    id: EventId.TopManagerInterview,
    name: 'Интервью с топ-менеджерами компании',
    length: 3,
    cooldown: 40,
    type: EventType.Individual,
    description:
      'Организация и публикация в корпоративной прессе интервью с топ-менеджерами компании. Основная цель — прояснить связь успешных изменений с интегральными показателями деятельности компании.',
  },
  {
    id: EventId.EmployeePrivateMeeting,
    name: 'Личная встреча с сотрудниками компании',
    length: 0.25,
    cooldown: 20,
    type: EventType.Individual,
    description:
      'Основная цель — укрепление личных отношений и формирование позитивного отношения к проекту у вашего коллеги.',
  },
  {
    id: EventId.MeetingTopManager,
    name: 'Личная встреча с топ-менеджером',
    length: 2,
    cooldown: 30,
    type: EventType.Individual,
    description:
      'Заметьте, что Вы должны предварительно запланировать встречу с топ-менеджером через его ассистента в соответствие с его расписанием.',
  },
  {
    id: EventId.PrivateEmail,
    name: 'Личное сообщение по электронной почте',
    length: 0.1,
    cooldown: 15,
    type: EventType.Individual,
    description:
      'Эту инициативу Вы можете успешно использовать для повышения результативности встреч с коллегами, для получения обратной связи, а также формальной и неформальной поддержки проводимых изменений со стороны сотрудников Компании.',
  },
  {
    id: EventId.AskingColleagueAdvise,
    name: 'Обращение за советом к коллеге',
    length: 0.3,
    cooldown: 20,
    type: EventType.Individual,
    description:
      'Вы обращаетесь за советом к менеджерам и специалистам компании. Основная цель — заручиться поддержкой и вызвать ощущение, что к их мнению прислушиваются.',
  },
  {
    id: EventId.HelpingColleagues,
    name: 'Оказание помощи коллегам в их проектах',
    length: 5,
    cooldown: 30,
    type: EventType.Individual,
    description:
      'Вы выделяете одного или нескольких сотрудников вашего подразделения для выполнения работ по проектам, реализуемым другими проектными группами. Основная цель — заручиться поддержкой и вовлечение менеджеров в процесс устранения препятствий.',
  },
  {
    id: EventId.PilotProject,
    name: 'Пилотный проект',
    length: 8,
    cooldown: 60,
    type: EventType.Individual,
    description:
      'Попытайтесь убедить одного из менеджеров компании о целесообразности запуска пилотного проекта в его функциональном подразделении или предприятии.',
  },
  {
    id: EventId.UsingColleagueAsExport,
    name: 'Привлечение в качестве эксперта сотрудника компании',
    length: 2,
    cooldown: 30,
    type: EventType.Individual,
    description:
      'Вы обращаетесь за экспертной помощью к сотруднику компании с просьбой поделиться своим видением происходящих процессов изменений. Основная цель, которую Вы преследуете — вызвать чувство сопричастности к проекту.',
  },

  {
    id: EventId.BrainStorm,
    name: 'Мозговой штурм',
    length: 3,
    cooldown: 30,
    type: EventType.Group,
    description:
      'Подготовка и проведение мозгового штурма. Цель — создание видения, разработка стратегии реализации проекта.',
  },
  {
    id: EventId.AskingGuru,
    name: 'Привлечение внешнего консультанта («гуру»)',
    length: 4,
    cooldown: 60,
    type: EventType.Group,
    description:
      'Вы приглашаете ведущего специалиста в области управления изменениями и управления организационной культурой в качестве модератора для проведения мозгового штурма или обсуждения новой корпоративной культуры компании. Вы получите ощутимый результат от участия внешних специалистов в планируемых мероприятиях, но Вам придется потратить время на согласование с ним сроков проведения мероприятия.',
  },
  {
    id: EventId.ExternalProvidersSeminar,
    name: 'Семинар с привлечением внешних провайдеров',
    length: 8,
    cooldown: 60,
    type: EventType.Group,
    description:
      'При организации этого семинара Вы преследуете следующие цели: формирование желательных (требуемых) моделей поведения, помощь в разрешении конфликтных ситуаций, улучшение морального климата. Обратите внимание, что на подготовку каждого семинара требуется существенное время.',
  },
  {
    id: EventId.LearningEvent,
    name: 'Проведение обучающего семинара с участием одного из топ-менеджеров компании',
    length: 10,
    cooldown: 60,
    type: EventType.Group,
    description:
      'Основная цель, которую Вы преследуете — демонстрация сотрудникам компании поддержки проводимых изменений со стороны руководителей высшего звена. Заметьте, что на подготовку и организацию такого семинара Вам потребуется существенное время.',
  },
  {
    id: EventId.PrivateMeeting,
    name: 'Совещание',
    length: 2,
    cooldown: 15,
    type: EventType.Group,
    description:
      'Подготовка и проведение совещания рабочей группы проекта. Кроме сотрудников своего отдела Вы можете пригласить любых специалистов и менеджеров компании. Дополнительная цель, которую Вы преследуете, приглашая к участию в проведении совещания — оказать влияние на отношение приглашенных лиц к проекту, вовлекая их в обсуждение основных вопросов и планирование действий по внедрению изменений, а также подведение итогов проекта.',
  },
  {
    id: EventId.TeamBuildingTraining,
    name: 'Тренинг по командообразованию',
    length: 3,
    cooldown: 180,
    type: EventType.Group,
    description:
      'Организация и проведение тренинга по командообразованию. Основная цель — формирование команды единомышленников. Кроме сотрудников отдела Стратегического развития Вы можете пригласить и других сотрудников компании.',
  },
  {
    id: EventId.PrivateParty,
    name: 'Частная вечеринка',
    length: 1,
    cooldown: 90,
    type: EventType.Group,
    description:
      'Вы организуете частную вечеринку с сотрудниками Вашего отдела, на которую Вы можете пригласить и других сотрудников компании. Основная цель — создание хорошего микроклимата, командообразование. Кроме этого Вы можете получить неформальную обратную связь от приглашенных.',
  },
]
