import type { RejectChance } from '../types/RejectChance'
import { RejectChancesCollection } from '../types/RejectChance'
import { CharId } from '../types/Character'
import { EventId } from '../types/Event'

// Шансы и текстовые реакции каждого персонажа на отказ в участии в каждом групповом мероприятии в каждом периоде
// period - event - character

export const chancesToRejectEvents: RejectChancesCollection = [
  // Период 1
  {
    // Групповые
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0.9, reply: 'Александр, извините, но это время у меня уже занято.' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.9, reply: 'Не понимаю, зачем нужно мое присутствие.' },
      [CharId.Accountant]: { chance: 0.5, reply: 'Не понимаю, зачем нужно мое присутствие.' },
      [CharId.ProductionChief]: { chance: 0.5, reply: 'Александр, извините, но это время у меня уже занято.' },
      [CharId.SalesDirector]: { chance: 0.5, reply: 'Извините, в настоящее время Ирина находится на конференции.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разгуливать ситуацию! Извините.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: {
        chance: 0.8,
        reply:
          'Г-н президент отказал Вам со словами, что не понимает, зачем нужно его присутствие на этом мероприятии.',
      },
      [CharId.Mentor]: { chance: 1.0, reply: 'Вы не получили никакого ответа на Ваше приглашение.' },
      [CharId.FinanceVp]: { chance: 0.7, reply: 'Извините, очень занят, запланировал уже ряд встреч на этот период.' },
      [CharId.ProductionVp]: { chance: 0.5, reply: 'Очень занят…' },
      [CharId.DevelopmentVp]: { chance: 0.5, reply: 'Вы получили отказ: По-моему, это совсем не ко времени.' },
      [CharId.SecurityChief]: { chance: 0.5, reply: 'Я не посещаю такие мероприятия.' },
      [CharId.AuditChief]: { chance: 0.4, reply: 'Вы получили отказ.' },
      [CharId.FinanceDirector]: { chance: 0.5, reply: 'Извините, Александр. Очень много дел навалилось.' },
      [CharId.Accountant]: { chance: 0.5, reply: 'Не думаю, что мне будет это интересно. Извините.' },
      [CharId.ProductionChief]: { chance: 0.35, reply: 'К сожалению, не смогу придти.' },
      [CharId.SalesDirector]: {
        chance: 0.4,
        reply: 'Не уверена, что понимаю смысл этого действия в  данный момент. Извините.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },

    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.7, reply: 'Извините, не смогу присутствовать.' },
      [CharId.ProductionVp]: {
        chance: 0.5,
        reply: 'К сожалению, Н. Каменев отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.5,
        reply: 'Не думаю, что в данный момент это полезное действие, поэтому я не хочу тратить на это свое время.',
      },
      [CharId.SecurityChief]: { chance: 0.5, reply: 'Мне надо выполнять свою работу, а не учиться. Извините.' },
      [CharId.AuditChief]: {
        chance: 0.4,
        reply:
          'Извините, но организация Службы внутреннего аудита требует очень много времени. К сожалению, я не могу пока посещать такие мероприятия.',
      },
      [CharId.FinanceDirector]: {
        chance: 0.5,
        reply: 'Интересно конечно, но боюсь, не смогу выкроить времени для посещения семинара.',
      },
      [CharId.Accountant]: { chance: 0.5, reply: 'Не думаю, что мне будет это интересно. Извините.' },
      [CharId.ProductionChief]: { chance: 0.4, reply: 'У меня много дел. Извините.' },
      [CharId.SalesDirector]: {
        chance: 0.4,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },

    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.5,
        reply:
          'Начальство послушать всегда интересно, но, к сожалению, очень занят, проверка, отчеты… ну Вы понимаете.',
      },
      [CharId.Accountant]: { chance: 0.4, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.ProductionChief]: { chance: 0.4, reply: 'Г-н Нэфф находится в командировке.' },
      [CharId.SalesDirector]: {
        chance: 0.4,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },

    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.9,
        reply: 'В связи с проведением внеплановой аудиторской проверки я не смогу посетить Ваше совещание.',
      },
      [CharId.ProductionVp]: { chance: 0.8, reply: 'К сожалению, нет времени для участия в Вашем совещании.' },
      [CharId.DevelopmentVp]: {
        chance: 0.4,
        reply: 'Александр, не смогу быть, но жду от Вас отчета о прошедшем совещании.',
      },
      [CharId.SecurityChief]: {
        chance: 0.4,
        reply: 'Сергей Александрович в настоящее время находится в командировке.',
      },
      [CharId.AuditChief]: { chance: 0.8, reply: 'Елена Крылова не сможет посетить Ваше совещание.' },
      [CharId.FinanceDirector]: { chance: 0.9, reply: 'Я в это же время назначил совещание для своих сотрудников.' },
      [CharId.Accountant]: {
        chance: 0.35,
        reply: 'Извините, но я не вижу потребности в моем присутствии на Вашем совещании.',
      },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply:
          'Я считаю, что на этом совещании должна присутствовать проектная группа, поэтому не вижу смысла его посещать.',
      },
      [CharId.SalesDirector]: { chance: 0.25, reply: 'Извините, я  сейчас очень занята.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу присутствовать' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },

    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.9,
        reply: 'Помощник финансового директора сообщил что г-н Григорьев в командировке.',
      },
      [CharId.Accountant]: { chance: 0.6, reply: 'Боюсь, я прыгать и бегать уже не способна.' },
      [CharId.ProductionChief]: {
        chance: 0.4,
        reply: 'Александр, не думаю, что мне это нужно, да и работы сейчас полно.',
      },
      [CharId.SalesDirector]: { chance: 0.5, reply: 'Не вижу особого смысла, да и неразрешенных дел еще целый воз.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },

    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 1.0, reply: 'Молодой человек, боюсь, что это не для меня.' },
      [CharId.Mentor]: { chance: 1.0, reply: 'Меня не будет в это время в Москве.' },
      [CharId.FinanceVp]: { chance: 0.9, reply: 'Г-н Ливанов, считаю, что мое присутствие лишним.' },
      [CharId.ProductionVp]: { chance: 0.7, reply: 'Г-н Каменев находится в командировке.' },
      [CharId.DevelopmentVp]: {
        chance: 0.5,
        reply: 'Александр, у меня уже есть планы на это время. Желаю Вам хорошо провести вечер.',
      },
      [CharId.SecurityChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение. Предпочитаю вечерами все таки отдыхать дома.',
      },
      [CharId.AuditChief]: { chance: 0.6, reply: 'Александр, спасибо за приглашение, но у меня уже есть планы.' },
      [CharId.FinanceDirector]: { chance: 0.5, reply: 'Спасибо за приглашение. У меня уже есть планы на этот вечер.' },
      [CharId.Accountant]: { chance: 0.6, reply: 'Спасибо, но такое времяпровождение не по мне.' },
      [CharId.ProductionChief]: {
        chance: 0.5,
        reply: 'Спасибо за приглашение, но у меня уже были планы на этот вечер.',
      },
      [CharId.SalesDirector]: { chance: 0.5, reply: 'Спасибо за приглашение, но у меня уже были планы на этот вечер.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    [EventId.MeetingColleagues]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.1,
        reply: '- Извините, меня срочно вызывает руководство, боюсь наша встреча не может состояться.',
      },
      [CharId.Accountant]: {
        chance: 0.2,
        reply: 'В связи с сильной занятостью, Валентина Ивановна не сможет с Вами встретиться.',
      },
      [CharId.ProductionChief]: {
        chance: 0.1,
        reply:
          '- Александр, к сожалению, у нас планируется открытие новой установки. Так что не смогу с Вами встретиться.',
      },
      [CharId.SalesDirector]: {
        chance: 0.1,
        reply: 'В данный момент г-жа Александрова находится в командировке.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.TopManagerInterview]: {
      [CharId.President]: {
        chance: 0.9,
        reply: '- Управлять Компанией совсем не просто. Не могу уделить Вам время.',
      },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.9,
        reply: '- По-моему, это совсем не ко времени. Ничем не могу Вам помочь.',
      },
      [CharId.ProductionVp]: { chance: 0.8, reply: '- Извините, не смогу уделить Вам время.' },
      [CharId.DevelopmentVp]: {
        chance: 0.8,
        reply: 'К сожалению, Вице-президент отбыл в командировку.',
      },
      [CharId.SecurityChief]: {
        chance: 0.7,
        reply: '- Извините, у нас планируется выездное мероприятие. Я должен проследить.. ',
      },
      [CharId.AuditChief]: {
        chance: 0.8,
        reply: 'На Ваше предложение не было получено никакого ответа.',
      },
      [CharId.FinanceDirector]: { chance: 0, reply: '' },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0, reply: '' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.EmployeePrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: '- К сожалению, у меня много дел. Извините.' },
      [CharId.Accountant]: { chance: 0.2, reply: '- Извините, готовимся к отчету.' },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'Г-н Нэфф находится на обучении.' },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: '- Извините, в настоящее время Ирина находится на конференции. ',
      },
      [CharId.FactoryDirector]: {
        chance: 0.15,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.HrDirector]: { chance: 0.3, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      [CharId.PrDirector]: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.2, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.2,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      [CharId.LegalChief]: { chance: 0.4, reply: '- Давайте отложим встречу на потом…' },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.05,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.05,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    [EventId.MeetingTopManager]: {
      [CharId.President]: {
        chance: 0.9,
        reply: 'В настоящее время, г-н В. Молодцов не может выкроить время для встречи с Вами.',
      },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.5,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      [CharId.ProductionVp]: {
        chance: 0.5,
        reply:
          '- Александр,  меня очень интересует вопрос внедрения процессного управления в Компании, но, к сожалению, нет времени, чтобы встретиться с Вами.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.3,
        reply:
          '- Александр, к сожалению, на этой неделе у меня уже все расписано. Но, обязательно держите меня в курсе.',
      },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: 'Сергей Александрович не сможет уделить Вам время.',
      },
      [CharId.AuditChief]: {
        chance: 0.5,
        reply: 'К сожалению, Елены не будет всю неделю (по семейным обстоятельствам).',
      },
      [CharId.FinanceDirector]: { chance: 0, reply: '' },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0, reply: '' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateEmail]: {
      [CharId.President]: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      [CharId.Mentor]: {
        chance: 0.1,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      [CharId.FinanceVp]: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      [CharId.ProductionVp]: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      [CharId.DevelopmentVp]: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      [CharId.SecurityChief]: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.AuditChief]: {
        chance: 0.1,
        reply: 'Вы не получили сообщения о прочтении Вашего письма.',
      },
      [CharId.FinanceDirector]: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      [CharId.Accountant]: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      [CharId.ProductionChief]: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      [CharId.SalesDirector]: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.2,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.2,
        reply: ' - Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply:
          'Вы получили e-mail следующего содержания: message to "Заместитель по закупкам" could not be delivered. Please contact your system administrator.',
      },
      [CharId.HrDirector]: {
        chance: 0.1,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.ItChief]: {
        chance: 0.05,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.05,
        reply: ' - Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      [CharId.LegalChief]: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.RndDeputy]: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    [EventId.AskingColleagueAdvise]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: {
        chance: 0.2,
        reply: 'В данный момент г-н Карташов находится в командировке.',
      },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.1, reply: '- Прошу прощения, я готовлю срочную отчетность.' },
      [CharId.Accountant]: { chance: 0.45, reply: '- Вряд ли я смогу чем-нибудь Вам помочь.' },
      [CharId.ProductionChief]: { chance: 0.4, reply: '- Я бы рад, но на этой неделе все уже расписано.' },
      [CharId.SalesDirector]: {
        chance: 0.3,
        reply: 'В данный момент г-жа Александрова находится в командировке.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем в Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.HrDirector]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.PrDirector]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      [CharId.ItChief]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.ChiefOfStaff]: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      [CharId.LegalChief]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.RndDeputy]: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутвовал на рабочем месте, когда Вы пришли к нему.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    [EventId.HelpingColleagues]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.5,
        reply: '- Я бы посоветовал Вам заняться своим проектом, Александр. Спасибо за предложение.',
      },
      [CharId.Accountant]: {
        chance: 0.6,
        reply: '- Не думаю, что Вы можете чем-нибудь мне помочь. Спасибо.',
      },
      [CharId.ProductionChief]: { chance: 0.4, reply: '- Спасибо, но не нуждаюсь пока.' },
      [CharId.SalesDirector]: { chance: 0.4, reply: '- Спасибо, но не нуждаюсь пока.' },
      [CharId.FactoryDirector]: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к, сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      [CharId.PrDirector]: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      [CharId.ItChief]: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PilotProject]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 1.0,
        reply:
          '- Я не считаю нужным тратить время своих сотрудников на проект, преимущества которого я пока не понимаю.',
      },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0.35, reply: '- Александр, не время сейчас…' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.UsingColleagueAsExport]: {
      [CharId.President]: {
        chance: 0.9,
        reply: 'Вы получили ответ из приемной президента, что, к сожалению, он не может Вам помочь, т.к. очень занят.',
      },
      [CharId.Mentor]: {
        chance: 0.9,
        reply: 'К сожалению, у Вас так и не получилось связаться с г-ном П. Стюартом.',
      },
      [CharId.FinanceVp]: {
        chance: 0.7,
        reply: '- У нас сейчас проходит внеплановая аудиторская проверка. Боюсь, что не смогу уделить Вам время.',
      },
      [CharId.ProductionVp]: {
        chance: 0.5,
        reply:
          'Вице-президент по производству находится на совещании Технического Совета, которое проходит на  заводе РусПром.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.3,
        reply: 'В данный момент г-н Карташов находится в командировке.',
      },
      [CharId.SecurityChief]: { chance: 0.5, reply: '- Очень много дел, извините.' },
      [CharId.AuditChief]: {
        chance: 0.5,
        reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.',
      },
      [CharId.FinanceDirector]: {
        chance: 0.4,
        reply: '- У нас сейчас проходит внеплановая аудиторская проверка.',
      },
      [CharId.Accountant]: {
        chance: 0.5,
        reply: '- Извините, на носу проверка, совершенно нет времени на беседы.',
      },
      [CharId.ProductionChief]: {
        chance: 0.4,
        reply: '- Александр, боюсь, что не смогу Вам помочь, уезжаю в командировку.',
      },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: '- Александр, боюсь, что не смогу Вам помочь, уезжаю в командировку.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.3,
        reply:
          'В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения',
      },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      [CharId.PrDirector]: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
  },

  // Период 2
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'Александр, к сожалению, я очень занят в настоящее время.' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.25, reply: 'Александр, к сожалению, я очень занят в настоящее время.' },
      [CharId.Accountant]: { chance: 0.3, reply: 'Мне это неинтересно.' },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.SalesDirector]: { chance: 0.25, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.8, reply: 'Думаю, что Вы и без меня справитесь.' },
      [CharId.Mentor]: { chance: 0.9, reply: 'Я не планирую посещение Москвы в ближайшие две недели.' },
      [CharId.FinanceVp]: { chance: 0.5, reply: 'К сожалению, г-н Жан находится на больничном.' },
      [CharId.ProductionVp]: {
        chance: 0.4,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, не смогу придти.',
      },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'К сожалению, не смогу выкроить время.' },
      [CharId.SecurityChief]: { chance: 0.4, reply: 'Возникли некоторые проблемы, необходимо мое вмешательство.' },
      [CharId.AuditChief]: { chance: 0.3, reply: 'Извините, завтра уезжаю на обучение.' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: 'Боюсь мне не до штурмов, на носу очередная аудиторская проверка.',
      },
      [CharId.Accountant]: {
        chance: 0.35,
        reply: 'Извините, но мне скоро предстоит отчитываться перед руководством, мне не до штурмов.',
      },
      [CharId.ProductionChief]: {
        chance: 0.4,
        reply: 'К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      [CharId.SalesDirector]: { chance: 0.35, reply: 'К сожалению, не смогу выкроить время.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.5, reply: 'Очень занят.' },
      [CharId.ProductionVp]: { chance: 0.35, reply: 'Боюсь, что это невозможно…' },
      [CharId.DevelopmentVp]: { chance: 0.25, reply: 'Извините, но г-н К.Карташов был вызван к президенту.' },
      [CharId.SecurityChief]: { chance: 0.4, reply: 'Не думаю, что мне это нужно. Спасибо.' },
      [CharId.AuditChief]: { chance: 0.3, reply: 'Александр, к сожалению, я очень занята в настоящее время.' },
      [CharId.FinanceDirector]: {
        chance: 0.28,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.Accountant]: { chance: 0.3, reply: 'Не думаю, что есть смысл ходить на этот семинар.' },
      [CharId.ProductionChief]: { chance: 0.4, reply: 'Извините, занят.' },
      [CharId.SalesDirector]: { chance: 0.4, reply: 'В настоящее время, Ирина находится в отпуске.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии в настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.35, reply: 'Боюсь, что это невозможно…' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Пока я не уверена, что смогу придти.' },
      [CharId.ProductionChief]: { chance: 0.4, reply: 'К сожалению, у меня много дел. Извините.' },
      [CharId.SalesDirector]: { chance: 0.4, reply: 'Извините, мне необходимо заняться одним важным делом.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.6,
        reply: 'В настоящее время Вице-президент по финансам находится в командировке.',
      },
      [CharId.ProductionVp]: {
        chance: 0.45,
        reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.2,
        reply: 'К сожалению, Кирилл Карташов в данный момент находится на больничном.',
      },
      [CharId.SecurityChief]: {
        chance: 0.4,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      [CharId.AuditChief]: {
        chance: 0.4,
        reply: 'Г-жа Крылова написала Вам, что не видит необходимости своего присутствия на совещании.',
      },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Александр, извините, я уезжаю в командировку.' },
      [CharId.Accountant]: { chance: 0.4, reply: 'Спасибо. Не думаю, что мне это будет интересно.' },
      [CharId.ProductionChief]: {
        chance: 0.5,
        reply:
          'По той информации, что Вы мне прислали, я понял, что это совещание направлено скорее на проектную группу, Вы думаете мне есть смысл приходить?',
      },
      [CharId.SalesDirector]: { chance: 0.4, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: 'Извините, в это время я не смогу.' },
      [CharId.Accountant]: { chance: 0.4, reply: 'А что это такое… бегать, прыгать… нет, не смогу.' },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'К сожалению, не смогу выкроить время.' },
      [CharId.SalesDirector]: { chance: 0.5, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.25,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.15,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 0.9, reply: 'Очень признателен, но меня не будет в Москве в это время.' },
      [CharId.Mentor]: { chance: 1.0, reply: 'Спасибо, но меня не будет в Москве.' },
      [CharId.FinanceVp]: { chance: 0.6, reply: 'Спасибо, но вечера я предпочитаю проводить с семьей.' },
      [CharId.ProductionVp]: { chance: 0.6, reply: 'Вы не получили никакого ответа.' },
      [CharId.DevelopmentVp]: { chance: 0.5, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      [CharId.SecurityChief]: { chance: 0.4, reply: 'Хех… я уже не танцор' },
      [CharId.AuditChief]: { chance: 0.5, reply: 'Александр, у меня уже запланировано это время. Желаю успехов.' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Звучит заманчиво, но к сожалению у меня семейный праздник.' },
      [CharId.Accountant]: { chance: 0.5, reply: 'Спасибо, но я не поклонница таких вечеринок.' },
      [CharId.ProductionChief]: { chance: 0.5, reply: 'Уезжаю в командировку.' },
      [CharId.SalesDirector]: {
        chance: 0.4,
        reply: 'А что Вы планируете? Ой, совсем забыла, к сожалению, не смогу быть.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    [EventId.MeetingColleagues]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: 'Ваша встреча сорвалась, т.к. г-н Григорьев был вызван к руководству.',
      },
      [CharId.Accountant]: {
        chance: 0.3,
        reply: '- Очень много дел, надо еще подготовить отчет… совсем нет времени.',
      },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: '- К сожалению, г-н Нэфф в данный момент находится в командировке.',
      },
      [CharId.SalesDirector]: { chance: 0.3, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TopManagerInterview]: {
      [CharId.President]: { chance: 0.6, reply: 'Не поступило никакого ответа.' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.55, reply: '- К сожалению, не смогу вам помочь' },
      [CharId.ProductionVp]: {
        chance: 0.55,
        reply:
          '- По моему мнению, пока говорить о каких-либо результатах Вашего проекта очень рано. Пока не считаю нужным тратить время на Вашу инициативу.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.4,
        reply: '- О каких результатах Вы говорите? Пока не считаю нужным тратить время на Вашу инициативу.',
      },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: '- Я не видел каких-либо результатов, Вы думаете стоит тратить на это время тогда?',
      },
      [CharId.AuditChief]: {
        chance: 0.55,
        reply: '- К сожалению, все мое время на эту неделю уже расписано.',
      },
      [CharId.FinanceDirector]: { chance: 0, reply: '' },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0, reply: '' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.EmployeePrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: '- Извините Александр, очень много дел.' },
      [CharId.Accountant]: {
        chance: 0.3,
        reply: '- Извините, готовим плановую отчетность, совсем нет времени на разговоры.',
      },
      [CharId.ProductionChief]: {
        chance: 0.2,
        reply: '- К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: '- К сожалению, Ирина находится на презентации в одном из подразделении Компании.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.HrDirector]: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      [CharId.PrDirector]: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: '-У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      [CharId.LegalChief]: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      [CharId.RndDeputy]: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    [EventId.MeetingTopManager]: {
      [CharId.President]: {
        chance: 0.6,
        reply:
          'К сожалению, в данный момент Валерий Молодцов не располагает свободным временем, чтобы встретиться с Вами.',
      },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.5,
        reply:
          'Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, наша встреча, пока не может состояться.',
      },
      [CharId.ProductionVp]: {
        chance: 0.3,
        reply:
          '- Извините, но г-н Н.Каменев был вызван на внеплановое совещание Управляющего Совета. Ваша встреча сорвалась.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.2,
        reply:
          '-Извините, но г-н К.Карташов был вызван на внеплановое совещание Управляющего Совета. Ваша встреча сорвалась.',
      },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: '- Извините, мне необходимо заняться одним важным делом.',
      },
      [CharId.AuditChief]: {
        chance: 0.3,
        reply: '- К сожалению, пока я не могу выкроить для вас время.',
      },
      [CharId.FinanceDirector]: { chance: 0, reply: '' },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0, reply: '' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateEmail]: {
      [CharId.President]: {
        chance: 0.2,
        reply:
          'Ваше сообщение не было получено в приемной Президента. Наверное, произошел какой-то сбой при отправке сообщения.',
      },
      [CharId.Mentor]: {
        chance: 0.4,
        reply: 'Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      [CharId.FinanceVp]: {
        chance: 0.2,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      [CharId.ProductionVp]: { chance: 0.15, reply: 'Ваше сообщение не было прочитано.' },
      [CharId.DevelopmentVp]: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      [CharId.SecurityChief]: {
        chance: 0.2,
        reply: '- Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      [CharId.AuditChief]: {
        chance: 0.2,
        reply:
          'Ваше сообщение не было получено в приемной Елены Крыловой, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      [CharId.FinanceDirector]: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      [CharId.Accountant]: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      [CharId.ProductionChief]: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      [CharId.SalesDirector]: {
        chance: 0.21,
        reply:
          '- Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.1,
        reply: '-Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      [CharId.HrDirector]: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      [CharId.PrDirector]: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.05,
        reply: '- Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      [CharId.RndDeputy]: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    [EventId.AskingColleagueAdvise]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: {
        chance: 0.2,
        reply:
          'Александр, я уезжаю в командировку, но если у Вас возникнут серьезные проблемы с осуществлением этого проекта, поставьте меня в известность, пожалуйста.',
      },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: '- К сожалению, не смогу выкроить время.' },
      [CharId.Accountant]: {
        chance: 0.3,
        reply: '- В данный момент не могу уделить Вам ни минутки.',
      },
      [CharId.ProductionChief]: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. К сожалению я не могу уделить Вам время.',
      },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply:
          '- Александр, я уезжаю в командировку, но если у Вас возникнут серьезные проблемы с осуществлением этого проекта, поставьте меня в известность, пожалуйста.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.HrDirector]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.PrDirector]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.ItChief]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.ChiefOfStaff]: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      [CharId.LegalChief]: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      [CharId.RndDeputy]: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутвовал на рабочем месте, когда Вы пришли к нему.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    [EventId.HelpingColleagues]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: '- Спасибо, нет необходимости.' },
      [CharId.Accountant]: { chance: 0.4, reply: '- Спасибо, мне не нужна Ваша помощь.' },
      [CharId.ProductionChief]: { chance: 0.3, reply: '- Спасибо, нет необходимости.' },
      [CharId.SalesDirector]: { chance: 0.25, reply: '- Спасибо, нет необходимости.' },
      [CharId.FactoryDirector]: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      [CharId.PrDirector]: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      [CharId.ItChief]: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PilotProject]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Спасибо, не думаю, что нам это необходимо.' },
      [CharId.Accountant]: { chance: 0, reply: '' },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'Я не уверен, что готов помочь Вам в этом.' },
      [CharId.SalesDirector]: { chance: 0, reply: '' },
      [CharId.FactoryDirector]: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      [CharId.LogisticsDirector]: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.UsingColleagueAsExport]: {
      [CharId.President]: {
        chance: 0.65,
        reply:
          'Вы получили сообщение из приемной президента: "К сожалению, в связи с занятостью В. Молодцова, он не сможет Вам помочь".',
      },
      [CharId.Mentor]: {
        chance: 0.6,
        reply: 'К сожалению, Вы так и не смогли связаться с г-ном Стюартом.',
      },
      [CharId.FinanceVp]: { chance: 0.5, reply: '- К сожалению, у меня много дел. Извините.' },
      [CharId.ProductionVp]: {
        chance: 0.45,
        reply: '- Извините, не смогу выкроить для Вас время. Очень занят.',
      },
      [CharId.DevelopmentVp]: { chance: 0.2, reply: '- Г-н Карташов находится в командировке.' },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: 'По каким-то причинам Ваше предложение проигнорировали.',
      },
      [CharId.AuditChief]: {
        chance: 0.3,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: '- Очень занят, проверка, отчеты… ну Вы понимаете.',
      },
      [CharId.Accountant]: {
        chance: 0.4,
        reply: '- Очень занята, проверка, отчеты… ну Вы понимаете.',
      },
      [CharId.ProductionChief]: { chance: 0.3, reply: '- Извините Александр, очень много дел.' },
      [CharId.SalesDirector]: {
        chance: 0.3,
        reply: '- Боюсь, что не смогу Вам помочь, ввиду своей занятости.',
      },
      [CharId.FactoryDirector]: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      [CharId.PrDirector]: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      [CharId.ChiefOfStaff]: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
  },
  // Период 3
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: 'Извините, у меня на носу плановый отчет, мне надо подготовиться.',
      },
      [CharId.Accountant]: {
        chance: 0.2,
        reply:
          'Спасибо за приглашение. Но к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'В данный момент г-н Нэфф находится в командировке.' },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: 'Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: '-Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.55, reply: 'Дело полезное! Я думаю, Вы и без меня справитесь.' },
      [CharId.Mentor]: { chance: 0.65, reply: 'Извините, очень много дел и совсем нет времени.' },
      [CharId.FinanceVp]: { chance: 0.2, reply: 'К сожалению, г-н Жан находится в командировке.' },
      [CharId.ProductionVp]: {
        chance: 0.2,
        reply:
          'Александр, рад бы помочь, но к сожалению, совсем нет времени… То командировки, то новый цех запускаем, вы меня понимаете…',
      },
      [CharId.DevelopmentVp]: { chance: 0.15, reply: 'Г-н Карташов в командировке.' },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: 'У нас планируется выездное мероприятие, я должен проследить. Извините.',
      },
      [CharId.AuditChief]: { chance: 0.15, reply: 'На Ваше предложение не было получено никакого ответа.' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: 'Спасибо, но мне это не интересно.' },
      [CharId.Accountant]: {
        chance: 0.15,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.ProductionChief]: {
        chance: 0.23,
        reply:
          'К сожалению, на это время уже назначено заседание Совета по технической политике, так что присутствовать не смогу.',
      },
      [CharId.SalesDirector]: { chance: 0.22, reply: 'Вы так и не смогли связаться с Ириной.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.15,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.1,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.4, reply: 'Мне это не интересно, спасибо.' },
      [CharId.ProductionVp]: {
        chance: 0.33,
        reply: 'Извините, очень занят. Не смогу выкроить время для посещения семинара.',
      },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      [CharId.SecurityChief]: { chance: 0.45, reply: 'Мне это неинтересно, спасибо.' },
      [CharId.AuditChief]: {
        chance: 0.33,
        reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.',
      },
      [CharId.FinanceDirector]: { chance: 0.35, reply: 'Спасибо, но мне это не интересно.' },
      [CharId.Accountant]: { chance: 0.3, reply: 'Не думаю, что мне это нужно. Спасибо.' },
      [CharId.ProductionChief]: { chance: 0.25, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      [CharId.SalesDirector]: {
        chance: 0.22,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии в настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.4,
        reply: 'Извините, но скоро у нас плановая проверка. Мне надо проследить за подготовкой…',
      },
      [CharId.Accountant]: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.ProductionChief]: { chance: 0.26, reply: 'У меня много дел. Извините.' },
      [CharId.SalesDirector]: {
        chance: 0.27,
        reply: 'Сегодня был тяжелый день. Извините, что-то я неважно себя чувствую.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.4, reply: 'Г-н Жан так и не ответил на Ваше приглашение.' },
      [CharId.ProductionVp]: {
        chance: 0.4,
        reply:
          'Николай Каменев написал Вам: "Как бы я не был заинтересован в успешном осуществлении Вашего проекта, но  у нас есть и свои, не менее важные. Спасибо за приглашение."',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.2,
        reply: 'Вице-президент оп организационному развитию не смог посетить совещание.',
      },
      [CharId.SecurityChief]: {
        chance: 0.33,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.AuditChief]: { chance: 0.4, reply: 'Вы не получили ответа на Ваше приглашение.' },
      [CharId.FinanceDirector]: { chance: 0.25, reply: 'Валентина Ивановна находится на обучении.' },
      [CharId.Accountant]: { chance: 0.15, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем совещании.',
      },
      [CharId.SalesDirector]: { chance: 0.15, reply: 'Александр, не смогу посетить Вас, уезжаю в командировку.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Валентина Ивановна находится на обучении.' },
      [CharId.Accountant]: { chance: 0.3, reply: 'Александр, не думаю, что мне это нужно, да и работы сейчас полно.' },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать. Дела не ждут...' },
      [CharId.SalesDirector]: { chance: 0.29, reply: 'Не вижу особого смысла, да и неразрешенных дел еще целый воз.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 1.0, reply: 'Спасибо за приглашение. Желаю весело и с пользой провести время.' },
      [CharId.Mentor]: { chance: 1.0, reply: 'Меня не будет в Москве. Спасибо.' },
      [CharId.FinanceVp]: { chance: 0.75, reply: 'Не смогу быть.' },
      [CharId.ProductionVp]: { chance: 0.6, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.DevelopmentVp]: {
        chance: 0.5,
        reply: 'Спасибо за приглашение, но придти не смогу, у дочери День Рождения.',
      },
      [CharId.SecurityChief]: {
        chance: 0.4,
        reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.',
      },
      [CharId.AuditChief]: { chance: 0.55, reply: 'К сожалению, Елена не смогла придти.' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Спасибо, но это не по мне.' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      [CharId.ProductionChief]: {
        chance: 0.34,
        reply: 'Спасибо за приглашение. Но я не особый поклонник русских вечеринок.',
      },
      [CharId.SalesDirector]: { chance: 0.25, reply: 'Сегодня был тяжелый день. Извините, что-то я очень устала.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          '-Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },
  },
  // Период 4
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: {
        chance: 0.38,
        reply: 'Вице-президент ответил Вам, что не видит необходимости присутствовать на мозговом штурме.',
      },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Не думаю, что мне это интересно. Спасибо.' },
      [CharId.Accountant]: { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.ProductionChief]: { chance: 0.25, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      [CharId.SalesDirector]: { chance: 0.25, reply: 'Александр, я очень занята в настоящее время.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.35, reply: 'Вы не смогли связаться с президентом.' },
      [CharId.Mentor]: { chance: 0.33, reply: 'Я не планирую посещение Москвы в ближайшие две недели.' },
      [CharId.FinanceVp]: { chance: 0.3, reply: 'Очень занят.' },
      [CharId.ProductionVp]: { chance: 0.25, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      [CharId.DevelopmentVp]: {
        chance: 0.25,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'Боюсь мне не до штурмов, надо же за всеми присматривать.' },
      [CharId.AuditChief]: {
        chance: 0.27,
        reply:
          'Александр, возможно меня это и заинтересовало бы, но к сожалению, в ближайшую неделю я буду на конференции.',
      },
      [CharId.FinanceDirector]: {
        chance: 0.24,
        reply: 'Извините, но мне скоро предстоит отчитываться перед руководством, мне не до штурмов.',
      },
      [CharId.Accountant]: { chance: 0.25, reply: 'Очень занят... Проверки, отчеты… ну Вы понимаете.' },
      [CharId.ProductionChief]: {
        chance: 0.26,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.SalesDirector]: {
        chance: 0.26,
        reply: 'Я польщена. К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: '-К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.3, reply: 'Дело полезное! Я думаю, Вы и без меня справитесь.' },
      [CharId.ProductionVp]: { chance: 0.3, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      [CharId.DevelopmentVp]: { chance: 0.2, reply: 'Не думаю, что есть смысл ходить на этот семинар. Спасибо.' },
      [CharId.SecurityChief]: { chance: 0.29, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      [CharId.AuditChief]: { chance: 0.19, reply: 'Извините, Александр. Очень много дел навалилось.' },
      [CharId.FinanceDirector]: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.Accountant]: {
        chance: 0.15,
        reply: 'Интересно конечно, но боюсь, не смогу выкроить времени для посещения семинара.',
      },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: '-Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0.48, reply: 'Александр, Ты не прав!' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      [CharId.Accountant]: { chance: 0.1, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.ProductionChief]: { chance: 0.15, reply: 'Это очень интересно. Но у меня сейчас такая запарка…' },
      [CharId.SalesDirector]: {
        chance: 0.15,
        reply: 'Всегда интересно послушать высшее руководство, но, к сожалению, у меня много дел. ',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.5, reply: 'Извините, но это время у меня уже занято.' },
      [CharId.ProductionVp]: { chance: 0.5, reply: 'Г-н Каменев не смогу придти.' },
      [CharId.DevelopmentVp]: { chance: 0.2, reply: 'Если у меня появится время, я зайду к Вам.' },
      [CharId.SecurityChief]: {
        chance: 0.26,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      [CharId.AuditChief]: { chance: 0.4, reply: 'К сожалению, у меня назначено совещание в своем подразделении.' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.',
      },
      [CharId.Accountant]: { chance: 0.17, reply: 'Александр, не смогу посетить совещание, уезжаю в командировку.' },
      [CharId.ProductionChief]: {
        chance: 0.28,
        reply: 'К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      [CharId.SalesDirector]: {
        chance: 0.27,
        reply:
          'Сегодня какой-то тяжелый день, голова просто раскалывается, наверное давление. Боюсь, я не выдержу еще одного совещания.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Мне это неинтересно, спасибо.' },
      [CharId.Accountant]: { chance: 0.29, reply: 'К сожалению, у меня много дел. Извините.' },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: 'Александр, я неважно чувствовал себя на этой неделе, видимо простудился. Думаю, мне стоит рисковать…',
      },
      [CharId.SalesDirector]: {
        chance: 0.26,
        reply:
          'Спасибо, Александр. Но эту неделю я что-то неважно себя чувствую. Думаю, в таком состоянии мне лучше не скакать…',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 0.8, reply: 'Г-н президент находится в командировке.' },
      [CharId.Mentor]: { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      [CharId.FinanceVp]: { chance: 0.6, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.ProductionVp]: { chance: 0.5, reply: 'Очень занят. Не смогу посетить Вас.' },
      [CharId.DevelopmentVp]: { chance: 0.4, reply: 'Спасибо, не смогу присутствовать, уезжаю в командировку.' },
      [CharId.SecurityChief]: {
        chance: 0.3,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      [CharId.AuditChief]: { chance: 0.5, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      [CharId.Accountant]: { chance: 0.18, reply: 'Сегодня был тяжелый день. Извините, что-то я очень устал.' },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      [CharId.SalesDirector]: { chance: 0.32, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },
  },

  // Период 5
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0.8, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.2,
        reply: 'На эту неделю Валентина Ивановна запланировала обучение на семинаре.',
      },
      [CharId.Accountant]: {
        chance: 0.24,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.ProductionChief]: {
        chance: 0.26,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      [CharId.SalesDirector]: {
        chance: 0.15,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.4, reply: 'Вы так и не смогли связаться с президентом.' },
      [CharId.Mentor]: { chance: 0.5, reply: 'Спасибо, но у меня уже назначен ряд мероприятий на ближайшие 2 недели…' },
      [CharId.FinanceVp]: { chance: 0.3, reply: 'К сожалению, у меня много дел. Извините.' },
      [CharId.ProductionVp]: {
        chance: 0.22,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.DevelopmentVp]: { chance: 0.25, reply: 'Г-н Карташов в командировке.' },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'Спасибо, но мне это неинтересно.' },
      [CharId.AuditChief]: { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      [CharId.Accountant]: { chance: 0.23, reply: 'Боюсь, что не смогу Вам помочь, ввиду своей занятости.' },
      [CharId.ProductionChief]: {
        chance: 0.2,
        reply:
          'Г-н Нэфф в письме к Вам извинился, что не может участвовать, т.к. в ближайшую неделю его не будет в Москве.',
      },
      [CharId.SalesDirector]: {
        chance: 0.27,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.3, reply: 'Спасибо, не думаю, что мне это интересно.' },
      [CharId.ProductionVp]: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.DevelopmentVp]: { chance: 0.23, reply: 'Г-н Карташов в командировке.' },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      [CharId.AuditChief]: {
        chance: 0.25,
        reply: 'К сожалению, не смогу присутствовать. Некоторые дела требуют моего присутствия.',
      },
      [CharId.FinanceDirector]: { chance: 0.26, reply: 'К сожалению, Валентина Ивановна заболела.' },
      [CharId.Accountant]: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.ProductionChief]: { chance: 0.2, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.SalesDirector]: {
        chance: 0.25,
        reply: 'Александр, я бы хотела поучаствовать, только я завтра уезжаю на завод.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.Accountant]: { chance: 0.25, reply: 'Очень занят. Проверка, отчеты… ну Вы понимаете.' },
      [CharId.ProductionChief]: { chance: 0.27, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      [CharId.SalesDirector]: {
        chance: 0.25,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: {
        chance: 0.5,
        reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета.',
      },
      [CharId.ProductionVp]: {
        chance: 0.5,
        reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.5,
        reply: 'Александр, не смогу посетить Вас, но на это время назначено заседание Управляющего Совета',
      },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'Спасибо. Не думаю, что мне это будет интересно.' },
      [CharId.AuditChief]: { chance: 0.5, reply: 'Не смогу, уже назначено другое совещание.' },
      [CharId.FinanceDirector]: {
        chance: 0.35,
        reply: 'Г-н Ливанов, я не смогу посетить ваше совещание. Очень занята.',
      },
      [CharId.Accountant]: {
        chance: 0.2,
        reply: 'Александр, сегодня был очень тяжелый день. Боюсь я не в состоянии посетить ваше совещание.',
      },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.SalesDirector]: {
        chance: 0.3,
        reply: 'Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Не думаю, что мне это интересно…' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Спасибо, но я не смогу вырваться.' },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'Г-н Нэфф находится в командировке.' },
      [CharId.SalesDirector]: {
        chance: 0.26,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      [CharId.Mentor]: { chance: 0.7, reply: 'В ближайшую неделю я не планировал посещение Вашей компании.' },
      [CharId.FinanceVp]: { chance: 0.6, reply: 'Очень занят. Не смогу посетить Вас.' },
      [CharId.ProductionVp]: { chance: 0.5, reply: 'Спасибо за приглашение. Очень занят. Не смогу посетить Вас.' },
      [CharId.DevelopmentVp]: { chance: 0.4, reply: '-К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      [CharId.SecurityChief]: {
        chance: 0.4,
        reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.',
      },
      [CharId.AuditChief]: { chance: 0.2, reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Спасибо, но такие мероприятия не по мне…' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Г-н Григорьев плохо почувствовал себя к вечеру.' },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: 'Спасибо, Александр. Но я небольшой поклонник русских вечеринок.',
      },
      [CharId.SalesDirector]: { chance: 0.35, reply: 'Спасибо, у меня уже есть планы на вечер.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },
  },

  // Период 6
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: {
        chance: 0.6,
        reply: 'Не вижу необходимости моего присутствия, я думаю, Вы справитесь сами.',
      },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.35, reply: 'Очень занят. Извините.' },
      [CharId.Accountant]: { chance: 0.28, reply: 'Г-н Григорьев в командировке.' },
      [CharId.ProductionChief]: {
        chance: 0.35,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      [CharId.SalesDirector]: { chance: 0.34, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: - Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.5, reply: 'Очень занят. Извините.' },
      [CharId.Mentor]: { chance: 0.5, reply: 'В ближайшую неделю я не планировал посещение России.' },
      [CharId.FinanceVp]: { chance: 0.35, reply: 'Г-н Жан так и не ответил на Ваше предложение.' },
      [CharId.ProductionVp]: { chance: 0.35, reply: 'Г-н Карташов в командировке.' },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'Очень занят. Извините.' },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.AuditChief]: { chance: 0.35, reply: 'К сожалению, вы не получили никакого ответа.' },
      [CharId.FinanceDirector]: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.Accountant]: {
        chance: 0.18,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу участвовать.',
      },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: 'Г-н Нэфф не смог участвовать, т.к. возникли неотложные дела, требующие его присутствия.',
      },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply: 'Извините, г-н Ливанов, на это время у Ирины уже назначена важная встреча.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.15,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.1,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.3, reply: 'Очень занят. Извините.' },
      [CharId.ProductionVp]: {
        chance: 0.3,
        reply: 'Г-н Каменев не смог посетить семинар, т.к. возникли неотложные дела, требующие его присутствия.',
      },
      [CharId.DevelopmentVp]: {
        chance: 0.3,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.SecurityChief]: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.AuditChief]: { chance: 0.35, reply: 'Александр, сейчас я очень занят. ' },
      [CharId.FinanceDirector]: {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.Accountant]: { chance: 0.3, reply: 'Очень занят. Извините.' },
      [CharId.ProductionChief]: { chance: 0.35, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      [CharId.SalesDirector]: {
        chance: 0.36,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      [CharId.Accountant]: { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      [CharId.ProductionChief]: {
        chance: 0.3,
        reply: 'К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      [CharId.SalesDirector]: {
        chance: 0.33,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.8, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      [CharId.ProductionVp]: { chance: 0.5, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      [CharId.DevelopmentVp]: { chance: 0.2, reply: 'Не смогу прийти, думаю, Вы и без меня прекрасно справитесь.' },
      [CharId.SecurityChief]: { chance: 0.35, reply: 'Г-н Михайловский в командировке.' },
      [CharId.AuditChief]: { chance: 0.34, reply: 'У меня уже назначена встреча на это время.' },
      [CharId.FinanceDirector]: {
        chance: 0.24,
        reply: 'Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      [CharId.Accountant]: {
        chance: 0.2,
        reply: 'Извините, г-н Ливанов, на это время у г-на Григорьева уже назначена важная встреча.',
      },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.SalesDirector]: { chance: 0.3, reply: 'Очень занята. Извините.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.35, reply: 'Александр, к сожалению, не смогу уделить Вам время.' },
      [CharId.Accountant]: {
        chance: 0.32,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      [CharId.ProductionChief]: { chance: 0.4, reply: 'Очень занят. Извините.' },
      [CharId.SalesDirector]: {
        chance: 0.45,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: { chance: 0.9, reply: 'Вы не получили ответа на свое приглашение.' },
      [CharId.Mentor]: { chance: 1.0, reply: 'В ближайшую неделю я не планировал посещение России.' },
      [CharId.FinanceVp]: { chance: 0.45, reply: 'У меня уже запланировано это время. Извините.' },
      [CharId.ProductionVp]: { chance: 0.45, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      [CharId.DevelopmentVp]: { chance: 0.26, reply: 'Как-то я не настроен на вечеринку. Спасибо за приглашение.' },
      [CharId.SecurityChief]: { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      [CharId.AuditChief]: { chance: 0.45, reply: 'У меня были другие планы на этот вечер. Спасибо за приглашение.' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.ProductionChief]: {
        chance: 0.4,
        reply: 'Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.',
      },
      [CharId.SalesDirector]: {
        chance: 0.3,
        reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: '- Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств."',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },
  },

  // Период 7
  {
    [EventId.BrainStorm]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0.65, reply: 'Не вижу смысла в этом.' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.33,
        reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      [CharId.Accountant]: { chance: 0.25, reply: 'Не вижу смысла в этом.' },
      [CharId.ProductionChief]: {
        chance: 0.22,
        reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      [CharId.SalesDirector]: {
        chance: 0.2,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      [CharId.PrDirector]: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      [CharId.ItChief]: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    [EventId.AskingGuru]: {
      [CharId.President]: { chance: 0.5, reply: 'Не вижу смысла…' },
      [CharId.Mentor]: { chance: 0.7, reply: 'Г-н Ливанов, мое время стоит денег.' },
      [CharId.FinanceVp]: { chance: 0.4, reply: 'У меня уже назначена встреча на это время.' },
      [CharId.ProductionVp]: {
        chance: 0.4,
        reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      [CharId.DevelopmentVp]: { chance: 0.4, reply: 'Очень занят. Извините.' },
      [CharId.SecurityChief]: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.AuditChief]: { chance: 0.4, reply: 'Очень занят. Извините.' },
      [CharId.FinanceDirector]: { chance: 0.3, reply: 'Не вижу смысла в этом.' },
      [CharId.Accountant]: { chance: 0.28, reply: 'Извините, у меня запарка…' },
      [CharId.ProductionChief]: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.SalesDirector]: { chance: 0.28, reply: 'Ирина находится в командировке.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      [CharId.PrDirector]: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      [CharId.RndDeputy]: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    [EventId.ExternalProvidersSeminar]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.55, reply: 'Не смогу быть. Спасибо за приглашение.' },
      [CharId.ProductionVp]: { chance: 0.34, reply: 'Не вижу смысла в этом.' },
      [CharId.DevelopmentVp]: { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      [CharId.SecurityChief]: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      [CharId.AuditChief]: { chance: 0.6, reply: 'Не вижу смысла в этом.' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      [CharId.Accountant]: { chance: 0.25, reply: 'Г-н Григорьев находится в командировке.' },
      [CharId.ProductionChief]: { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      [CharId.SalesDirector]: {
        chance: 0.35,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.LearningEvent]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: { chance: 0.34, reply: 'Извините, у меня запарка…' },
      [CharId.Accountant]: {
        chance: 0.27,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      [CharId.ProductionChief]: {
        chance: 0.37,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      [CharId.SalesDirector]: { chance: 0.3, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: { chance: 0, reply: '' },
      [CharId.HrDirector]: { chance: 0, reply: '' },
      [CharId.PrDirector]: { chance: 0, reply: '' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0, reply: '' },
      [CharId.ItChief]: { chance: 0, reply: '' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: { chance: 0, reply: '' },
      [CharId.RndDeputy]: { chance: 0, reply: '' },
      [CharId.ItSupportChief]: { chance: 0, reply: '' },
      [CharId.ImplementationChief]: { chance: 0, reply: '' },
      [CharId.AnalysisChief]: { chance: 0, reply: '' },
    },
    [EventId.PrivateMeeting]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0.54, reply: 'У меня уже назначена встреча на это время.' },
      [CharId.ProductionVp]: {
        chance: 0.45,
        reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.',
      },
      [CharId.DevelopmentVp]: { chance: 0.35, reply: 'Очень занят. Извините.' },
      [CharId.SecurityChief]: { chance: 0.35, reply: 'Спасибо, мне это не интересно.' },
      [CharId.AuditChief]: { chance: 0.38, reply: 'У меня уже назначена встреча на это время.' },
      [CharId.FinanceDirector]: {
        chance: 0.23,
        reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      [CharId.Accountant]: { chance: 0.21, reply: 'Очень занят. Извините.' },
      [CharId.ProductionChief]: {
        chance: 0.31,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      [CharId.SalesDirector]: { chance: 0.33, reply: 'Извините, у меня запарка…' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.HrDirector]: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      [CharId.PrDirector]: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      [CharId.ItChief]: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      [CharId.RndDeputy]: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    [EventId.TeamBuildingTraining]: {
      [CharId.President]: { chance: 0, reply: '' },
      [CharId.Mentor]: { chance: 0, reply: '' },
      [CharId.FinanceVp]: { chance: 0, reply: '' },
      [CharId.ProductionVp]: { chance: 0, reply: '' },
      [CharId.DevelopmentVp]: { chance: 0, reply: '' },
      [CharId.SecurityChief]: { chance: 0, reply: '' },
      [CharId.AuditChief]: { chance: 0, reply: '' },
      [CharId.FinanceDirector]: {
        chance: 0.34,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      [CharId.Accountant]: { chance: 0.25, reply: 'Спасибо, но я не смогу вырваться.' },
      [CharId.ProductionChief]: { chance: 0.3, reply: 'Александр, к сожалению, не смогу выкроить время.' },
      [CharId.SalesDirector]: { chance: 0.4, reply: 'Очень занята. Извините.' },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.HrDirector]: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      [CharId.PrDirector]: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      [CharId.ItChief]: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      [CharId.RndDeputy]: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    [EventId.PrivateParty]: {
      [CharId.President]: {
        chance: 1.0,
        reply: 'Я не поклонник таких мероприятий. Желаю Вам хорошо отметить Ваш успех.',
      },
      [CharId.Mentor]: { chance: 1.0, reply: 'Спасибо, но меня не будет в России в этот период.' },
      [CharId.FinanceVp]: { chance: 0.8, reply: 'Не смогу быть. Спасибо за приглашение.' },
      [CharId.ProductionVp]: { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      [CharId.DevelopmentVp]: { chance: 0.3, reply: 'К сожалению, я не важно себя чувствую.' },
      [CharId.SecurityChief]: { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      [CharId.AuditChief]: { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошего вечера.' },
      [CharId.FinanceDirector]: { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.Accountant]: { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      [CharId.ProductionChief]: {
        chance: 0.4,
        reply: '- Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.',
      },
      [CharId.SalesDirector]: {
        chance: 0.3,
        reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.',
      },
      [CharId.FactoryDirector]: { chance: 0, reply: '' },
      [CharId.LogisticsDirector]: { chance: 0, reply: '' },
      [CharId.SalesDeputy]: { chance: 0, reply: '' },
      [CharId.SupplyDeputy]: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.HrDirector]: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      [CharId.PrDirector]: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      [CharId.NewspaperEditor]: { chance: 0, reply: '' },
      [CharId.MarketingChief]: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      [CharId.ItChief]: {
        chance: 0.2,
        reply: '- "Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти."',
      },
      [CharId.ChiefOfStaff]: { chance: 0, reply: '' },
      [CharId.LegalChief]: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      [CharId.RndDeputy]: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ItSupportChief]: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.ImplementationChief]: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      [CharId.AnalysisChief]: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },
  },
]
