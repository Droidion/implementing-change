import type { Character } from '../types/Character'

/**
 * Список персонажей игры с их начальными параметрами.ц
 */
export const characters: Character[] = [
  {
    id: 'president',
    name: 'Валерий Молодцов',
    title: 'Президент',
    age: 52,
    description: [
      'Президент холдинга «Омега» с 2012 года.',
      'Один из участников создания холдинга, и акционер компании, владеющий 8% акций холдинга.',
      'До 2012 года являлся Директором Департамента инвестиционных проектов в ФПГ «ТрансИнвест», принимал непосредственное участие в скупке производственных активов холдинга «Омега».',
    ],
    support: 15,
    titleSort: 1,
  },

  {
    id: 'mentor',
    name: 'Пол Стюарт',
    title: 'Внешний консультант (ментор)',
    age: 55,
    description: [
      'Пол Стюарт родился в 1962 г. в Окленде (штат Калифорния, США).',
      'Профессор Оксфордского университета.',
      'Один из наиболее известных специалистов в области стратегического менеджмента.',
      'Его книга «Корпоративная стратегия» наделавшая большой шум как в корпорациях, так и в учебных заведениях, недавно была издана и на русском языке. Как-то в кругу коллег, г-н Стюарт заметил, что «Концепций и теорий наработано с избытком, а стратегический менеджмент силен и интересен кейсами! Их нужно собирать и изучать!» Эта фраза наилучшим образом объясняет тот интерес и неподдельный энтузиазм, с которым профессор относится к своим российским партнерам.',
    ],
    support: 25,
    titleSort: 2,
  },

  {
    id: 'financeVp',
    name: 'Жан Деруа',
    title: 'Вице-президент по финансам',
    age: 38,
    description: [
      'Окончил в 2002 году Университет d’Aix-Marseille, по специальности «Экономика». Имеет степень MBA в области финансов, которую получил в Said Business School Оксфордского Университета, МВА (финансы) в 2006 году.',
      'Работал в департаменте корпоративных финансов международной консалтинговой компании Deloitte & Touche, а затем возглавлял финансовый департамент в восточноевропейском подразделении компании Novartis.',
    ],
    support: 10,
    titleSort: 3,
  },

  {
    id: 'productionVp',
    name: 'Николай Каменев',
    title: 'Вице-президент по производству',
    age: 47,
    description: [
      'Выпускник Московского Энергетического Института, кандидат технических наук. Окончил заочно магистратуру академии им. Плеханова, после завершения которой прошел 4-х месячную стажировку на одном из ведущих профильных предприятий Западной Европы.',
      'В 1992 году был назначен директором НИИ новых технологий, которое под его руководством стало одним из ведущих в отрасли.',
      'Сыграл ключевую роль в выстраивании партнерских отношений между НИИ и заводом «РусПром», и впоследствии был приглашен Валерием Молодцовым на позицию вице-президента по производству.',
      'Является руководителем Совета по Технической Политике.',
    ],
    support: 17,
    titleSort: 4,
  },

  {
    id: 'developmentVp',
    name: 'Кирилл Карташов',
    title: 'Вице-президент по организационному развитию',
    age: 36,
    description: [
      'В 2003 году окончил МГИМО по специальности «Международные экономические отношения», в 2007 г. — Дипломатическую школу Института международных исследований (Лондон).',
      'До 2012 года работал менеджером по персоналу крупной телекомпании.',
      'Пришел в холдинг «Омега» одновременно с Валерием Молодцовым.',
    ],
    support: 35,
    titleSort: 5,
  },

  {
    id: 'securityChief',
    name: 'Сергей Михайловский',
    title: 'Начальник службы безопасности',
    age: 55,
    description: [
      'В 1987 году окончил финансово-экономический факультет Московского Финансового Института, а в 1996 году — Краснознамённую Академию внешней разведки.',
      'До 2007 года работал в силовых структурах в финансовом, кадровом и оперативных подразделениях в России и за рубежом.',
      'Полковник СВР в запасе.',
      'Работал начальником информационно-аналитического отдела крупного коммерческого банка (2007–2010), а также заместителем руководителя блока безопасности в крупной сырьевой компании.',
      'В 2013 году был приглашен Валерием Молодцовым в холдинг «Омега».',
      'Курирует вопросы, связанные с решением всех аспектов создания комплексной безопасности.',
    ],
    support: -5,
    titleSort: 6,
  },

  {
    id: 'auditChief',
    name: 'Елена Крылова',
    title: 'Начальник службы внутреннего аудита',
    age: 30,
    description: [
      'Елена Крылова родилась в 1984 г. в Ленинграде. В 2005 г. окончила экономический факультет МГУ, в 2008 г. получила диплом магистра в области финансов Лондонской школы экономики (LSE). В 2005 г. стала консультантом московского отделения Arthur Andersen. Работала в качестве руководителя команды внешних консультантов в рамках проекта по созданию комплексной системы управления рисками для холдинга «Омега» Впоследствии Валерий Молодцов пригласил Елену для реализации этого проекта в качестве Руководителя Службы внутреннего аудита.',
      'Перед Еленой стоит комплексная задача изменения системы корпоративного управления, для реализации которой требуется тесное сотрудничество с другими подразделениями Компании, и особенно с теми из них, которые реализуют контрольные функции. Однако на сегодняшний момент Елене не удалось достигнуть взаимопонимания с руководителями финансового блока холдинга и Службой безопасности, так как они считают ее функции конкурирующими.',
      'Елену Крылову активно поддерживают вице-президент по производству и директор торгового дома.',
    ],
    support: 26,
    titleSort: 7,
  },

  {
    id: 'financeDirector',
    name: 'Илья Григорьев',
    title: 'Финансовый директор',
    age: 34,
    description: [
      'В 2010 году закончил экономический факультет МГУ, а в 2013 г. — аспирантуру МГУ. В 2011–2013 гг. учился на экономическом факультете Hitotsubashi University (Токио, Япония).',
      'В 2011–2013 гг. работал в инвестиционной компании Daiwa Securities Co. Ltd., отдел Investment Banking (Токио, Япония).',
      'До прихода в холдинг «Омега» был сначала финансовым контролером, а впоследствии финансовым директором российской производственной компании.',
      'Амбициозный менеджер, сторонник изменений.',
      'Имеет успешный опыт внедрения в своем подразделении системы автоматизации финансовых потоков.',
    ],
    support: 23,
    titleSort: 8,
  },

  {
    id: 'accountant',
    name: 'Валентина Денисова',
    title: 'Главный бухгалтер',
    age: 43,
    description: [
      'В 1998 году окончила Институт Народного Хозяйства.',
      'До прихода в холдинг «Омега» долгое время работала сначала начальником отдела налогового планирования, а впоследствии главным бухгалтером в торговой структуре крупной нефтяной компании.',
      'В холдинге «Омега» 6 лет. Сильный профессионал в своей области, настоящий «гуру» в вопросах налогообложения. Несмотря на достаточно жесткий подход к управлению, обладает непререкаемым авторитетом среди подчиненных. Пользуется особым уважением у менеджеров региональных подразделений и старожилов компании.',
    ],
    support: -32,
    titleSort: 9,
  },

  {
    id: 'productionChief',
    name: 'Дэвид Нэфф',
    title: 'Начальник производственного управления',
    age: 40,
    description: [
      'Дэвид Нэфф в 2006 г. получил степень магистра Технического университета г. Дельфта (Нидерланды). В 2007 г. пришел в англо-голландскую компанию Corus Group.',
      'В холдинге «Омега» работает чуть больше года. Его назначение связывают с предстоящей модернизацией производства.',
      'Считает, что важен не только запуск новой технологической линии, но также и проведение мер по повышению качества, а также перестройка в структурной и управленческой сферах.',
    ],
    support: 62,
    titleSort: 10,
  },

  {
    id: 'salesDirector',
    name: 'Ирина Александрова',
    title: 'Директор торгового дома',
    age: 33,
    description: [
      'В 2007 году окончила МГИМО по специальности «Международные экономические отношения», а в 2016 году — Международную Бизнес Школу в рамках АНХ (МВА, Маркетинг).',
      'Профессиональный опыт Ирины Александровой формировался в рамках западной FMCG компании: от торгового представителя Ирина доросла до директора по продажам.',
      'Надо признать, что ее попытка применить свой западный опыт в рамках крупной российской компании оказалась успешной — за 2,5 года Ирине удалось наладить систему продаж, выстроить бизнес-процессы и сформировать отличную команду.',
      'По словам Ирины, в ближайшее время она хотела бы «повлиять на маркетинговую политику компании, а также выстроить эффективную маркетинговую службу холдинга». Это, по ее мнению, позволит компании «Омега» значительно укрепить рыночные позиции',
    ],
    support: 68,
    titleSort: 11,
  },

  {
    id: 'factoryDirector',
    name: 'Александр Шевцов',
    title: 'Директор завода ОмегаПром',
    age: 47,
    description: [
      'Родился в Красноярске. В 1994 г. Окончил Московский институт стали и сплавов. По распределению попал на завод, где прошел путь от аппаратчика-гидрометаллурга до главного инженера завода. В 2013 г. был назначен директором завода. В коллегах больше всего ценит приверженность своему делу.',
    ],
    support: 0,
    titleSort: 12,
  },

  {
    id: 'logisticsDirector',
    name: 'Игорь Стрельников',
    title: 'Директор транспортного предприятия',
    age: 43,
    description: [
      'Окончил Московский технический университет связи и информатики. До прихода в холдинг «Омега» в 2013 году работал в небольших российских компаниях.',
    ],
    support: 0,
    titleSort: 13,
  },

  {
    id: 'salesDeputy',
    name: 'Виктор Теплухин',
    title: 'Заместитель по сбыту',
    age: 26,
    description: [
      'Закончил факультет маркетинга регионального университета. Принимал участие в трех зарубежных стажировках, в рамках программы обмена студентами. Такое активное участие в студенческих обменах, по слухам, стало возможным благодаря родственным связям с мэром города, которому Виктор приходится племянником. В компании многие также полагают, что Виктору предоставили эту должность исключительно благодаря родственным связям. Сам же Виктор полагает, что эти родственные связи ему больше мешают, чем помогают.',
      'Виктор требователен к себе и его цель — стать хорошим профессионалом.',
      'С энтузиазмом воспринимает идею перехода на процессное управление, преимущества которого он оценил еще во время зарубежной стажировки. В реализации этого проекта Виктор видит для себя отличную возможность реализовать свои амбиции и доказать свой профессионализм.',
    ],
    support: 21,
    titleSort: 14,
  },

  {
    id: 'supplyDeputy',
    name: 'Алексей Пастухов',
    title: 'Заместитель по закупкам',
    age: 47,
    description: ['В 1999 году окончил Московский институт инженеров геодезии, аэрофотосъемки и картографии.'],
    support: -52,
    titleSort: 15,
  },

  {
    id: 'hrDirector',
    name: 'Михаил Уваров',
    title: 'HR директор',
    age: 36,
    description: [
      'Выпускник исторического факультета МГУ. В 2013 г. получил диплом МВА (Финансы) Московского отделения California State University (Московское отделение).',
      'До прихода в холдинг «Омега» в 2012 г. являлся менеджером по персоналу в банке.',
      'Считает, что компания стоит на пороге создания новых ключевых компетенций, что требует, на его взгляд, усиления роли HR департамента, придания ей более самостоятельной и весомой функции. В свое время перед службой HR не были поставлены долгосрочные стратегические задачи, не определены четкие критерии оценки эффективности работы этого подразделения. Михаил не проявил должной активности и настойчивости в том, чтобы убедить руководство компании в необходимости придания функции управления персоналом стратегического значения. В результате произошел заметный разрыв между потребностями бизнеса и теми задачами, которые реализуются службой персонала.',
    ],
    support: -18,
    titleSort: 16,
  },

  {
    id: 'prDirector',
    name: 'Глеб Ростоцкий',
    title: 'PR директор',
    age: 38,
    description: [
      'В 2001 году окончил Московского Государственного Педагогического Института Иностранных Языков им. Мориса Тореза по специальности референт-переводчик (английский и испанский языки).',
      'До 2007 года работал редактором в Информационное агентство «Новости».',
      'С 2009 года работал в международной западной корпорации — сначала Менеджером по связям с правительственными и общественными организациями, а позже — директором по внешним связям.',
      'В компании с начала образования, и поэтому, прошел все этапы формирования имиджа холдинга «Омега» С учетом специфики отрасли, этот процесс был неоднородным. Совсем недавно рынку удалось избавиться от образа «зоны военных действий», поскольку отрасль воспринималась исключительно в контексте постоянного передела собственности. В настоящий момент Глеб курирует также и вопросы, связанные с социальной активностью компании.',
    ],
    support: 0,
    titleSort: 17,
  },

  {
    id: 'newspaperEditor',
    name: 'Светлана Степанова',
    title: 'Главный редактор корпоративного издания',
    age: 36,
    description: [
      'Окончила филологический факультет Томбовского государственного института. Ранее работала в региональном подразделении холдинга. 3 года назад приняла предложение о переезде в московский офис. По-прежнему поддерживает тесные связи с регионами и активно отстаивает их интересы.',
    ],
    support: 0,
    titleSort: 18,
  },

  {
    id: 'marketingChief',
    name: 'Татьяна Новикова',
    title: 'Начальник управления маркетинга',
    age: 30,
    description: [
      'В 2014 г. окончила социологический факультете Московского Педагогического Государственного Университета.',
      'Ранее работала руководителем отдела количественных исследований в крупном маркетинговом агентстве.',
    ],
    support: -64,
    titleSort: 19,
  },

  {
    id: 'itChief',
    name: 'Виктор Зайцев',
    title: 'Начальник IT-отдела',
    age: 28,
    description: [
      'Виктор Зайцев родился в 1989 г. Окончил Московский авиационный институт в 2012 году. Работает в холдинге с момента его образования.',
      'Отношение Виктора к проекту будет зависеть от того, насколько удастся убедить его в важности участия IT-службы и его лично в реализации проекта.',
    ],
    support: 0,
    titleSort: 20,
  },

  {
    id: 'chiefOfStaff',
    name: 'Ольга Усова',
    title: 'Начальник управления делами',
    age: 40,
    description: ['Окончила экономический факультет Московского Государственного Института прикладной биотехнологии.'],
    support: -23,
    titleSort: 21,
  },

  {
    id: 'legalChief',
    name: 'Сергей Щеглов',
    title: 'Начальник юридического отдела',
    age: 32,
    description: [
      'Сергей Щеглов родился в 1986 г. Окончил Московскую государственную юридическую академию и ее аспирантуру. До 2012 г. работал Начальником юридического отдела в инвестиционной компании.',
      'Высокопрофессиональный юрист. Пользуется большим уважением среди коллег.',
    ],
    support: 0,
    titleSort: 22,
  },

  {
    id: 'rndDeputy',
    name: 'Денис Курбатов',
    title: 'Заместитель начальника ОСР',
    age: 29,
    description: [
      'Денис работает в компании 3 года. Принимал активное участие в первом запуске проекта по внедрению процессного управления. Болезненно переживает его неудачный запуск. По его мнению, причина неудачи заключалась в отсутствии поддержки на местах и недостатке административных мер и директивной поддержки проекта руководством компании. По мнению же многих руководителей среднего звена компании неудача проекта заключалась как раз в чрезмерном использовании административных рычагов продвижения проекта, активным приверженцем которых является Денис. Поэтому, назначение стороннего специалиста на должность начальника ОСР, а не Дениса, который был включен в кадровый резерв и ожидал продвижения по карьерной лестнице, оценивается в компании как удачное управленческое решение.',
    ],
    support: -18,
    titleSort: 23,
  },

  {
    id: 'itSupportChief',
    name: 'Ксения Ростоцкая',
    title: 'Начальник группы информационной поддержки',
    age: 28,
    description: [
      'Работает в компании с начала ее образования. Карьеру в компании начала с должности секретаря-референта. Окончила полиграфический институт, вечернее отделение, факультет книговедения и рекламы. После института заняла вновь созданную должность специалиста по информационной поддержке, а в прошлом году переведена на должность начальника группы информационной поддержки. В подчинении у Ксении один человек. Функции группы изначально не были четко определены, все свелось к выполнению различных поручений руководителей функциональных подразделений.',
    ],
    support: 0,
    titleSort: 24,
  },

  {
    id: 'implementationChief',
    name: 'Андрей Петров',
    title: 'Начальник группы внедрения',
    age: 31,
    description: [
      'Закончил МИИТ в 2007 году.',
      'Андрей возлагал большие надежды на этот проект. В последнее время серьезно стал задумываться о необходимости карьерного роста и надеялся, что успешный запуск проекта даст хорошие шансы для продвижения всей команде проекта, в том числе и ему лично.',
    ],
    support: 38,
    titleSort: 25,
  },

  {
    id: 'analysisChief',
    name: 'Юлия Ким',
    title: 'Начальник группы анализа и разработки изменений',
    age: 27,
    description: [
      'Окончила с отличием механико-математический факультет МГУ. Поступила в заочную аспирантуру университета, одновременно намеревается заочно обучаться в одной из бизнес-школ Великобритании.',
      'Приглашена в компанию предыдущим руководителем отдела стратегического развития.',
      'По мнению руководства Юлия является перспективным сотрудником, т.к. в ней удачно сочетаются прекрасное образование, аналитические способности, работоспособность и ответственность, умение строить эффективные отношения с коллегами.',
    ],
    support: 41,
    titleSort: 26,
  },
]
