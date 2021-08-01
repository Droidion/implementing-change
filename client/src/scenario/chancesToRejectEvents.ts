import { RejectChancesCollection } from '../types/RejectChance'

/**
 * Шансы и текстовые реакции каждого персонажа на отказ в участии в каждом групповом или индивидуальном мероприятии в каждом периоде.
 * @example chancesToRejectEvents[period - 1][eventId][characterId]
 */
export const chancesToRejectEvents: RejectChancesCollection = [
  // Период 1
  {
    // Групповые
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.9, reply: 'Александр, извините, но это время у меня уже занято.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.9, reply: 'Не понимаю, зачем нужно мое присутствие.' },
      accountant: { chance: 0.5, reply: 'Не понимаю, зачем нужно мое присутствие.' },
      productionChief: { chance: 0.5, reply: 'Александр, извините, но это время у меня уже занято.' },
      salesDirector: { chance: 0.5, reply: 'Извините, в настоящее время Ирина находится на конференции.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разгуливать ситуацию! Извините.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: {
        chance: 0.8,
        reply:
          'Г-н президент отказал Вам со словами, что не понимает, зачем нужно его присутствие на этом мероприятии.',
      },
      mentor: { chance: 1.0, reply: 'Вы не получили никакого ответа на Ваше приглашение.' },
      financeVp: { chance: 0.7, reply: 'Извините, очень занят, запланировал уже ряд встреч на этот период.' },
      productionVp: { chance: 0.5, reply: 'Очень занят…' },
      developmentVp: { chance: 0.5, reply: 'Вы получили отказ: По-моему, это совсем не ко времени.' },
      securityChief: { chance: 0.5, reply: 'Я не посещаю такие мероприятия.' },
      auditChief: { chance: 0.4, reply: 'Вы получили отказ.' },
      financeDirector: { chance: 0.5, reply: 'Извините, Александр. Очень много дел навалилось.' },
      accountant: { chance: 0.5, reply: 'Не думаю, что мне будет это интересно. Извините.' },
      productionChief: { chance: 0.35, reply: 'К сожалению, не смогу придти.' },
      salesDirector: {
        chance: 0.4,
        reply: 'Не уверена, что понимаю смысл этого действия в  данный момент. Извините.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },

    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.7, reply: 'Извините, не смогу присутствовать.' },
      productionVp: {
        chance: 0.5,
        reply: 'К сожалению, Н. Каменев отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      developmentVp: {
        chance: 0.5,
        reply: 'Не думаю, что в данный момент это полезное действие, поэтому я не хочу тратить на это свое время.',
      },
      securityChief: { chance: 0.5, reply: 'Мне надо выполнять свою работу, а не учиться. Извините.' },
      auditChief: {
        chance: 0.4,
        reply:
          'Извините, но организация Службы внутреннего аудита требует очень много времени. К сожалению, я не могу пока посещать такие мероприятия.',
      },
      financeDirector: {
        chance: 0.5,
        reply: 'Интересно конечно, но боюсь, не смогу выкроить времени для посещения семинара.',
      },
      accountant: { chance: 0.5, reply: 'Не думаю, что мне будет это интересно. Извините.' },
      productionChief: { chance: 0.4, reply: 'У меня много дел. Извините.' },
      salesDirector: {
        chance: 0.4,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },

    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.5,
        reply:
          'Начальство послушать всегда интересно, но, к сожалению, очень занят, проверка, отчеты… ну Вы понимаете.',
      },
      accountant: { chance: 0.4, reply: 'К сожалению, не смогу присутствовать.' },
      productionChief: { chance: 0.4, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: {
        chance: 0.4,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },

    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.9,
        reply: 'В связи с проведением внеплановой аудиторской проверки я не смогу посетить Ваше совещание.',
      },
      productionVp: { chance: 0.8, reply: 'К сожалению, нет времени для участия в Вашем совещании.' },
      developmentVp: {
        chance: 0.4,
        reply: 'Александр, не смогу быть, но жду от Вас отчета о прошедшем совещании.',
      },
      securityChief: {
        chance: 0.4,
        reply: 'Сергей Александрович в настоящее время находится в командировке.',
      },
      auditChief: { chance: 0.8, reply: 'Елена Крылова не сможет посетить Ваше совещание.' },
      financeDirector: { chance: 0.9, reply: 'Я в это же время назначил совещание для своих сотрудников.' },
      accountant: {
        chance: 0.35,
        reply: 'Извините, но я не вижу потребности в моем присутствии на Вашем совещании.',
      },
      productionChief: {
        chance: 0.3,
        reply:
          'Я считаю, что на этом совещании должна присутствовать проектная группа, поэтому не вижу смысла его посещать.',
      },
      salesDirector: { chance: 0.25, reply: 'Извините, я  сейчас очень занята.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу присутствовать' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },

    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.9,
        reply: 'Помощник финансового директора сообщил что г-н Григорьев в командировке.',
      },
      accountant: { chance: 0.6, reply: 'Боюсь, я прыгать и бегать уже не способна.' },
      productionChief: {
        chance: 0.4,
        reply: 'Александр, не думаю, что мне это нужно, да и работы сейчас полно.',
      },
      salesDirector: { chance: 0.5, reply: 'Не вижу особого смысла, да и неразрешенных дел еще целый воз.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },

    privateParty: {
      president: { chance: 1.0, reply: 'Молодой человек, боюсь, что это не для меня.' },
      mentor: { chance: 1.0, reply: 'Меня не будет в это время в Москве.' },
      financeVp: { chance: 0.9, reply: 'Г-н Ливанов, считаю, что мое присутствие лишним.' },
      productionVp: { chance: 0.7, reply: 'Г-н Каменев находится в командировке.' },
      developmentVp: {
        chance: 0.5,
        reply: 'Александр, у меня уже есть планы на это время. Желаю Вам хорошо провести вечер.',
      },
      securityChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение. Предпочитаю вечерами все таки отдыхать дома.',
      },
      auditChief: { chance: 0.6, reply: 'Александр, спасибо за приглашение, но у меня уже есть планы.' },
      financeDirector: { chance: 0.5, reply: 'Спасибо за приглашение. У меня уже есть планы на этот вечер.' },
      accountant: { chance: 0.6, reply: 'Спасибо, но такое времяпровождение не по мне.' },
      productionChief: {
        chance: 0.5,
        reply: 'Спасибо за приглашение, но у меня уже были планы на этот вечер.',
      },
      salesDirector: { chance: 0.5, reply: 'Спасибо за приглашение, но у меня уже были планы на этот вечер.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.1,
        reply: '- Извините, меня срочно вызывает руководство, боюсь наша встреча не может состояться.',
      },
      accountant: {
        chance: 0.2,
        reply: 'В связи с сильной занятостью, Валентина Ивановна не сможет с Вами встретиться.',
      },
      productionChief: {
        chance: 0.1,
        reply:
          '- Александр, к сожалению, у нас планируется открытие новой установки. Так что не смогу с Вами встретиться.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'В данный момент г-жа Александрова находится в командировке.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: {
        chance: 0.9,
        reply: '- Управлять Компанией совсем не просто. Не могу уделить Вам время.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.9,
        reply: '- По-моему, это совсем не ко времени. Ничем не могу Вам помочь.',
      },
      productionVp: { chance: 0.8, reply: '- Извините, не смогу уделить Вам время.' },
      developmentVp: {
        chance: 0.8,
        reply: 'К сожалению, Вице-президент отбыл в командировку.',
      },
      securityChief: {
        chance: 0.7,
        reply: '- Извините, у нас планируется выездное мероприятие. Я должен проследить.. ',
      },
      auditChief: {
        chance: 0.8,
        reply: 'На Ваше предложение не было получено никакого ответа.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: '- К сожалению, у меня много дел. Извините.' },
      accountant: { chance: 0.2, reply: '- Извините, готовимся к отчету.' },
      productionChief: { chance: 0.2, reply: 'Г-н Нэфф находится на обучении.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Извините, в настоящее время Ирина находится на конференции. ',
      },
      factoryDirector: {
        chance: 0.15,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.3, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.2, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.2,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.4, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.05,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.05,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.9,
        reply: 'В настоящее время, г-н В. Молодцов не может выкроить время для встречи с Вами.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.5,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      productionVp: {
        chance: 0.5,
        reply:
          '- Александр,  меня очень интересует вопрос внедрения процессного управления в Компании, но, к сожалению, нет времени, чтобы встретиться с Вами.',
      },
      developmentVp: {
        chance: 0.3,
        reply:
          '- Александр, к сожалению, на этой неделе у меня уже все расписано. Но, обязательно держите меня в курсе.',
      },
      securityChief: {
        chance: 0.3,
        reply: 'Сергей Александрович не сможет уделить Вам время.',
      },
      auditChief: {
        chance: 0.5,
        reply: 'К сожалению, Елены не будет всю неделю (по семейным обстоятельствам).',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      mentor: {
        chance: 0.1,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      financeVp: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      productionVp: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      developmentVp: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      securityChief: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      auditChief: {
        chance: 0.1,
        reply: 'Вы не получили сообщения о прочтении Вашего письма.',
      },
      financeDirector: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      accountant: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      productionChief: {
        chance: 0.1,
        reply: 'Вы получили сообщение о доставке, но не получили сообщения о прочтении.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.2,
        reply: ' - Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply:
          'Вы получили e-mail следующего содержания: message to "Заместитель по закупкам" could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.1,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.05,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: ' - Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.2,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Вы получили e-mail следующего содержания: message to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.2,
        reply: 'В данный момент г-н Карташов находится в командировке.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.1, reply: '- Прошу прощения, я готовлю срочную отчетность.' },
      accountant: { chance: 0.45, reply: '- Вряд ли я смогу чем-нибудь Вам помочь.' },
      productionChief: { chance: 0.4, reply: '- Я бы рад, но на этой неделе все уже расписано.' },
      salesDirector: {
        chance: 0.3,
        reply: 'В данный момент г-жа Александрова находится в командировке.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем в Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутвовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.5,
        reply: '- Я бы посоветовал Вам заняться своим проектом, Александр. Спасибо за предложение.',
      },
      accountant: {
        chance: 0.6,
        reply: '- Не думаю, что Вы можете чем-нибудь мне помочь. Спасибо.',
      },
      productionChief: { chance: 0.4, reply: '- Спасибо, но не нуждаюсь пока.' },
      salesDirector: { chance: 0.4, reply: '- Спасибо, но не нуждаюсь пока.' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к, сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 1.0,
        reply:
          '- Я не считаю нужным тратить время своих сотрудников на проект, преимущества которого я пока не понимаю.',
      },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0.35, reply: '- Александр, не время сейчас…' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: {
        chance: 0.9,
        reply: 'Вы получили ответ из приемной президента, что, к сожалению, он не может Вам помочь, т.к. очень занят.',
      },
      mentor: {
        chance: 0.9,
        reply: 'К сожалению, у Вас так и не получилось связаться с г-ном П. Стюартом.',
      },
      financeVp: {
        chance: 0.7,
        reply: '- У нас сейчас проходит внеплановая аудиторская проверка. Боюсь, что не смогу уделить Вам время.',
      },
      productionVp: {
        chance: 0.5,
        reply:
          'Вице-президент по производству находится на совещании Технического Совета, которое проходит на  заводе РусПром.',
      },
      developmentVp: {
        chance: 0.3,
        reply: 'В данный момент г-н Карташов находится в командировке.',
      },
      securityChief: { chance: 0.5, reply: '- Очень много дел, извините.' },
      auditChief: {
        chance: 0.5,
        reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.',
      },
      financeDirector: {
        chance: 0.4,
        reply: '- У нас сейчас проходит внеплановая аудиторская проверка.',
      },
      accountant: {
        chance: 0.5,
        reply: '- Извините, на носу проверка, совершенно нет времени на беседы.',
      },
      productionChief: {
        chance: 0.4,
        reply: '- Александр, боюсь, что не смогу Вам помочь, уезжаю в командировку.',
      },
      salesDirector: {
        chance: 0.2,
        reply: '- Александр, боюсь, что не смогу Вам помочь, уезжаю в командировку.',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          'В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },

  // Период 2
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.3, reply: 'Александр, к сожалению, я очень занят в настоящее время.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.25, reply: 'Александр, к сожалению, я очень занят в настоящее время.' },
      accountant: { chance: 0.3, reply: 'Мне это неинтересно.' },
      productionChief: { chance: 0.2, reply: 'К сожалению, не смогу присутствовать.' },
      salesDirector: { chance: 0.25, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.8, reply: 'Думаю, что Вы и без меня справитесь.' },
      mentor: { chance: 0.9, reply: 'Я не планирую посещение Москвы в ближайшие две недели.' },
      financeVp: { chance: 0.5, reply: 'К сожалению, г-н Жан находится на больничном.' },
      productionVp: {
        chance: 0.4,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, не смогу придти.',
      },
      developmentVp: { chance: 0.3, reply: 'К сожалению, не смогу выкроить время.' },
      securityChief: { chance: 0.4, reply: 'Возникли некоторые проблемы, необходимо мое вмешательство.' },
      auditChief: { chance: 0.3, reply: 'Извините, завтра уезжаю на обучение.' },
      financeDirector: {
        chance: 0.3,
        reply: 'Боюсь мне не до штурмов, на носу очередная аудиторская проверка.',
      },
      accountant: {
        chance: 0.35,
        reply: 'Извините, но мне скоро предстоит отчитываться перед руководством, мне не до штурмов.',
      },
      productionChief: {
        chance: 0.4,
        reply: 'К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      salesDirector: { chance: 0.35, reply: 'К сожалению, не смогу выкроить время.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.5, reply: 'Очень занят.' },
      productionVp: { chance: 0.35, reply: 'Боюсь, что это невозможно…' },
      developmentVp: { chance: 0.25, reply: 'Извините, но г-н К.Карташов был вызван к президенту.' },
      securityChief: { chance: 0.4, reply: 'Не думаю, что мне это нужно. Спасибо.' },
      auditChief: { chance: 0.3, reply: 'Александр, к сожалению, я очень занята в настоящее время.' },
      financeDirector: {
        chance: 0.28,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      accountant: { chance: 0.3, reply: 'Не думаю, что есть смысл ходить на этот семинар.' },
      productionChief: { chance: 0.4, reply: 'Извините, занят.' },
      salesDirector: { chance: 0.4, reply: 'В настоящее время, Ирина находится в отпуске.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии в настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.35, reply: 'Боюсь, что это невозможно…' },
      accountant: { chance: 0.2, reply: 'Пока я не уверена, что смогу придти.' },
      productionChief: { chance: 0.4, reply: 'К сожалению, у меня много дел. Извините.' },
      salesDirector: { chance: 0.4, reply: 'Извините, мне необходимо заняться одним важным делом.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.6,
        reply: 'В настоящее время Вице-президент по финансам находится в командировке.',
      },
      productionVp: {
        chance: 0.45,
        reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.',
      },
      developmentVp: {
        chance: 0.2,
        reply: 'К сожалению, Кирилл Карташов в данный момент находится на больничном.',
      },
      securityChief: {
        chance: 0.4,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      auditChief: {
        chance: 0.4,
        reply: 'Г-жа Крылова написала Вам, что не видит необходимости своего присутствия на совещании.',
      },
      financeDirector: { chance: 0.4, reply: 'Александр, извините, я уезжаю в командировку.' },
      accountant: { chance: 0.4, reply: 'Спасибо. Не думаю, что мне это будет интересно.' },
      productionChief: {
        chance: 0.5,
        reply:
          'По той информации, что Вы мне прислали, я понял, что это совещание направлено скорее на проектную группу, Вы думаете мне есть смысл приходить?',
      },
      salesDirector: { chance: 0.4, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: 'Извините, в это время я не смогу.' },
      accountant: { chance: 0.4, reply: 'А что это такое… бегать, прыгать… нет, не смогу.' },
      productionChief: { chance: 0.3, reply: 'К сожалению, не смогу выкроить время.' },
      salesDirector: { chance: 0.5, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.25,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.15,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: { chance: 0.9, reply: 'Очень признателен, но меня не будет в Москве в это время.' },
      mentor: { chance: 1.0, reply: 'Спасибо, но меня не будет в Москве.' },
      financeVp: { chance: 0.6, reply: 'Спасибо, но вечера я предпочитаю проводить с семьей.' },
      productionVp: { chance: 0.6, reply: 'Вы не получили никакого ответа.' },
      developmentVp: { chance: 0.5, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      securityChief: { chance: 0.4, reply: 'Хех… я уже не танцор' },
      auditChief: { chance: 0.5, reply: 'Александр, у меня уже запланировано это время. Желаю успехов.' },
      financeDirector: { chance: 0.3, reply: 'Звучит заманчиво, но к сожалению у меня семейный праздник.' },
      accountant: { chance: 0.5, reply: 'Спасибо, но я не поклонница таких вечеринок.' },
      productionChief: { chance: 0.5, reply: 'Уезжаю в командировку.' },
      salesDirector: {
        chance: 0.4,
        reply: 'А что Вы планируете? Ой, совсем забыла, к сожалению, не смогу быть.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: 'Ваша встреча сорвалась, т.к. г-н Григорьев был вызван к руководству.',
      },
      accountant: {
        chance: 0.3,
        reply: '- Очень много дел, надо еще подготовить отчет… совсем нет времени.',
      },
      productionChief: {
        chance: 0.3,
        reply: '- К сожалению, г-н Нэфф в данный момент находится в командировке.',
      },
      salesDirector: { chance: 0.3, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    topManagerInterview: {
      president: { chance: 0.6, reply: 'Не поступило никакого ответа.' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.55, reply: '- К сожалению, не смогу вам помочь' },
      productionVp: {
        chance: 0.55,
        reply:
          '- По моему мнению, пока говорить о каких-либо результатах Вашего проекта очень рано. Пока не считаю нужным тратить время на Вашу инициативу.',
      },
      developmentVp: {
        chance: 0.4,
        reply: '- О каких результатах Вы говорите? Пока не считаю нужным тратить время на Вашу инициативу.',
      },
      securityChief: {
        chance: 0.3,
        reply: '- Я не видел каких-либо результатов, Вы думаете стоит тратить на это время тогда?',
      },
      auditChief: {
        chance: 0.55,
        reply: '- К сожалению, все мое время на эту неделю уже расписано.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: '- Извините Александр, очень много дел.' },
      accountant: {
        chance: 0.3,
        reply: '- Извините, готовим плановую отчетность, совсем нет времени на разговоры.',
      },
      productionChief: {
        chance: 0.2,
        reply: '- К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      salesDirector: {
        chance: 0.2,
        reply: '- К сожалению, Ирина находится на презентации в одном из подразделении Компании.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '-У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.6,
        reply:
          'К сожалению, в данный момент Валерий Молодцов не располагает свободным временем, чтобы встретиться с Вами.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.5,
        reply:
          'Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, наша встреча, пока не может состояться.',
      },
      productionVp: {
        chance: 0.3,
        reply:
          '- Извините, но г-н Н.Каменев был вызван на внеплановое совещание Управляющего Совета. Ваша встреча сорвалась.',
      },
      developmentVp: {
        chance: 0.2,
        reply:
          '-Извините, но г-н К.Карташов был вызван на внеплановое совещание Управляющего Совета. Ваша встреча сорвалась.',
      },
      securityChief: {
        chance: 0.3,
        reply: '- Извините, мне необходимо заняться одним важным делом.',
      },
      auditChief: {
        chance: 0.3,
        reply: '- К сожалению, пока я не могу выкроить для вас время.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: {
        chance: 0.2,
        reply:
          'Ваше сообщение не было получено в приемной Президента. Наверное, произошел какой-то сбой при отправке сообщения.',
      },
      mentor: {
        chance: 0.4,
        reply: 'Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      financeVp: {
        chance: 0.2,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      productionVp: { chance: 0.15, reply: 'Ваше сообщение не было прочитано.' },
      developmentVp: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      securityChief: {
        chance: 0.2,
        reply: '- Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      auditChief: {
        chance: 0.2,
        reply:
          'Ваше сообщение не было получено в приемной Елены Крыловой, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      financeDirector: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      accountant: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      productionChief: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      salesDirector: {
        chance: 0.21,
        reply:
          '- Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '-Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: '- Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.2,
        reply:
          'Александр, я уезжаю в командировку, но если у Вас возникнут серьезные проблемы с осуществлением этого проекта, поставьте меня в известность, пожалуйста.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: '- К сожалению, не смогу выкроить время.' },
      accountant: {
        chance: 0.3,
        reply: '- В данный момент не могу уделить Вам ни минутки.',
      },
      productionChief: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. К сожалению я не могу уделить Вам время.',
      },
      salesDirector: {
        chance: 0.2,
        reply:
          '- Александр, я уезжаю в командировку, но если у Вас возникнут серьезные проблемы с осуществлением этого проекта, поставьте меня в известность, пожалуйста.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутвовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: '- Спасибо, нет необходимости.' },
      accountant: { chance: 0.4, reply: '- Спасибо, мне не нужна Ваша помощь.' },
      productionChief: { chance: 0.3, reply: '- Спасибо, нет необходимости.' },
      salesDirector: { chance: 0.25, reply: '- Спасибо, нет необходимости.' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.4, reply: 'Спасибо, не думаю, что нам это необходимо.' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0.3, reply: 'Я не уверен, что готов помочь Вам в этом.' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: {
        chance: 0.65,
        reply:
          'Вы получили сообщение из приемной президента: "К сожалению, в связи с занятостью В. Молодцова, он не сможет Вам помочь".',
      },
      mentor: {
        chance: 0.6,
        reply: 'К сожалению, Вы так и не смогли связаться с г-ном Стюартом.',
      },
      financeVp: { chance: 0.5, reply: '- К сожалению, у меня много дел. Извините.' },
      productionVp: {
        chance: 0.45,
        reply: '- Извините, не смогу выкроить для Вас время. Очень занят.',
      },
      developmentVp: { chance: 0.2, reply: '- Г-н Карташов находится в командировке.' },
      securityChief: {
        chance: 0.3,
        reply: 'По каким-то причинам Ваше предложение проигнорировали.',
      },
      auditChief: {
        chance: 0.3,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      financeDirector: {
        chance: 0.3,
        reply: '- Очень занят, проверка, отчеты… ну Вы понимаете.',
      },
      accountant: {
        chance: 0.4,
        reply: '- Очень занята, проверка, отчеты… ну Вы понимаете.',
      },
      productionChief: { chance: 0.3, reply: '- Извините Александр, очень много дел.' },
      salesDirector: {
        chance: 0.3,
        reply: '- Боюсь, что не смогу Вам помочь, ввиду своей занятости.',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },
  // Период 3
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: 'Извините, у меня на носу плановый отчет, мне надо подготовиться.',
      },
      accountant: {
        chance: 0.2,
        reply:
          'Спасибо за приглашение. Но к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      productionChief: { chance: 0.2, reply: 'В данный момент г-н Нэфф находится в командировке.' },
      salesDirector: {
        chance: 0.2,
        reply: 'Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: '-Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.55, reply: 'Дело полезное! Я думаю, Вы и без меня справитесь.' },
      mentor: { chance: 0.65, reply: 'Извините, очень много дел и совсем нет времени.' },
      financeVp: { chance: 0.2, reply: 'К сожалению, г-н Жан находится в командировке.' },
      productionVp: {
        chance: 0.2,
        reply:
          'Александр, рад бы помочь, но к сожалению, совсем нет времени… То командировки, то новый цех запускаем, вы меня понимаете…',
      },
      developmentVp: { chance: 0.15, reply: 'Г-н Карташов в командировке.' },
      securityChief: {
        chance: 0.3,
        reply: 'У нас планируется выездное мероприятие, я должен проследить. Извините.',
      },
      auditChief: { chance: 0.15, reply: 'На Ваше предложение не было получено никакого ответа.' },
      financeDirector: { chance: 0.2, reply: 'Спасибо, но мне это не интересно.' },
      accountant: {
        chance: 0.15,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      productionChief: {
        chance: 0.23,
        reply:
          'К сожалению, на это время уже назначено заседание Совета по технической политике, так что присутствовать не смогу.',
      },
      salesDirector: { chance: 0.22, reply: 'Вы так и не смогли связаться с Ириной.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.15,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.2,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.1,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.4, reply: 'Мне это не интересно, спасибо.' },
      productionVp: {
        chance: 0.33,
        reply: 'Извините, очень занят. Не смогу выкроить время для посещения семинара.',
      },
      developmentVp: { chance: 0.3, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      securityChief: { chance: 0.45, reply: 'Мне это неинтересно, спасибо.' },
      auditChief: {
        chance: 0.33,
        reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.',
      },
      financeDirector: { chance: 0.35, reply: 'Спасибо, но мне это не интересно.' },
      accountant: { chance: 0.3, reply: 'Не думаю, что мне это нужно. Спасибо.' },
      productionChief: { chance: 0.25, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      salesDirector: {
        chance: 0.22,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии в настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.4,
        reply: 'Извините, но скоро у нас плановая проверка. Мне надо проследить за подготовкой…',
      },
      accountant: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать.' },
      productionChief: { chance: 0.26, reply: 'У меня много дел. Извините.' },
      salesDirector: {
        chance: 0.27,
        reply: 'Сегодня был тяжелый день. Извините, что-то я неважно себя чувствую.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.4, reply: 'Г-н Жан так и не ответил на Ваше приглашение.' },
      productionVp: {
        chance: 0.4,
        reply:
          'Николай Каменев написал Вам: "Как бы я не был заинтересован в успешном осуществлении Вашего проекта, но  у нас есть и свои, не менее важные. Спасибо за приглашение."',
      },
      developmentVp: {
        chance: 0.2,
        reply: 'Вице-президент оп организационному развитию не смог посетить совещание.',
      },
      securityChief: {
        chance: 0.33,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      auditChief: { chance: 0.4, reply: 'Вы не получили ответа на Ваше приглашение.' },
      financeDirector: { chance: 0.25, reply: 'Валентина Ивановна находится на обучении.' },
      accountant: { chance: 0.15, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      productionChief: {
        chance: 0.3,
        reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем совещании.',
      },
      salesDirector: { chance: 0.15, reply: 'Александр, не смогу посетить Вас, уезжаю в командировку.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.4, reply: 'Валентина Ивановна находится на обучении.' },
      accountant: { chance: 0.3, reply: 'Александр, не думаю, что мне это нужно, да и работы сейчас полно.' },
      productionChief: { chance: 0.3, reply: 'К сожалению, не смогу присутствовать. Дела не ждут...' },
      salesDirector: { chance: 0.29, reply: 'Не вижу особого смысла, да и неразрешенных дел еще целый воз.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: { chance: 1.0, reply: 'Спасибо за приглашение. Желаю весело и с пользой провести время.' },
      mentor: { chance: 1.0, reply: 'Меня не будет в Москве. Спасибо.' },
      financeVp: { chance: 0.75, reply: 'Не смогу быть.' },
      productionVp: { chance: 0.6, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      developmentVp: {
        chance: 0.5,
        reply: 'Спасибо за приглашение, но придти не смогу, у дочери День Рождения.',
      },
      securityChief: {
        chance: 0.4,
        reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.',
      },
      auditChief: { chance: 0.55, reply: 'К сожалению, Елена не смогла придти.' },
      financeDirector: { chance: 0.3, reply: 'Спасибо, но это не по мне.' },
      accountant: { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      productionChief: {
        chance: 0.34,
        reply: 'Спасибо за приглашение. Но я не особый поклонник русских вечеринок.',
      },
      salesDirector: { chance: 0.25, reply: 'Сегодня был тяжелый день. Извините, что-то я очень устала.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу непредвиденных обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          '-Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.25,
        reply: 'Вы не получили никакой реакции на Ваше предложение.',
      },
      accountant: {
        chance: 0.25,
        reply: '- Александр, не думаю, что мне это нужно, да и работы сейчас полно.',
      },
      productionChief: { chance: 0.2, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Сегодня был очень тяжелый день. Извините, я очень устала.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: {
        chance: 0.65,
        reply: '-Извините, г-н Ливанов, но пока я не вижу необходимости в данном мероприятии.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.55, reply: '- Очень занят. Извините.' },
      productionVp: {
        chance: 0.5,
        reply:
          '- Александр, пока рано говорить о каких-либо результатах внедрения процессного управления. Давайте не будем тратить время зря.',
      },
      developmentVp: {
        chance: 0.45,
        reply:
          '- Александр, пока рано говорить о каких-либо результатах внедрения процессного управления. Давайте не будем тратить время зря.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.5,
        reply:
          '- Александр, пока рано говорить о каких-либо результатах внедрения процессного управления. Давайте не будем тратить время зря.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- Г-н Ливанов, вы представляете себе сколько у нас дел…',
      },
      accountant: {
        chance: 0.25,
        reply: '- Извините, Александр. Но пока я не могу найти время для встречи с Вами.',
      },
      productionChief: {
        chance: 0.2,
        reply: '- Александр, я бы хотел с Вами поговорить на эту тему, только я завтра уезжаю на завод.',
      },
      salesDirector: {
        chance: 0.15,
        reply:
          '- Александр, я бы хотела с Вами обсудить некоторые вопросы по Вашему проекту, но к сожалению, в ближайшую неделю я буду на конференции.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '-К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините, в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.7,
        reply:
          'Из приемной президента пришло сообщение: "Г-н Молодцов не нашел ваши аргументы достаточно убедительными, поэтому во встрече Вам отказано".',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.5,
        reply: 'Было созвано совещание топ-менеджеров Компании. Ваша встреча сорвалась.',
      },
      productionVp: {
        chance: 0.5,
        reply: 'Было созвано совещание топ-менеджеров Компании. Ваша встреча сорвалась.',
      },
      developmentVp: {
        chance: 0.5,
        reply: 'Было созвано совещание топ-менеджеров Компании. Ваша встреча сорвалась.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.3,
        reply:
          'Запланированная встреча с Еленой Крыловой сорвалась, т.к. в ее подразделении возникли вопросы, требующие немедленного разрешения.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: {
        chance: 0.3,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      mentor: { chance: 0.2, reply: 'Ваше сообщение не было прочитано.' },
      financeVp: { chance: 0.2, reply: 'Ваше сообщение не было прочитано.' },
      productionVp: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      developmentVp: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      securityChief: {
        chance: 0.1,
        reply: 'Во время отправки сообщения произошел сбой на почтовом сервере, Ваше сообщения не дошло до адресата.',
      },
      auditChief: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено в приемной Елены Крыловой, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      financeDirector: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено Валентиной Ивановной, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      accountant: {
        chance: 0.15,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      productionChief: {
        chance: 0.1,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'Вы не получили сообщение о доставке Вашего письма.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '-Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: ' - Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.1, reply: 'Г-н Карташов находится в командировке.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.4, reply: '- Извините, я очень занята.' },
      accountant: {
        chance: 0.3,
        reply: '- Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      productionChief: {
        chance: 0.25,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      salesDirector: {
        chance: 0.25,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутствовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.35,
        reply: '- Спасибо, но мы не очень то любим, когда кто-то вмешивается в наши, бухгалтерские дела.',
      },
      accountant: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      productionChief: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Спасибо, Александр. Но мы уже справляемся своими силами.',
      },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к, сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: 'Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю, что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0.33, reply: 'Г-н Григорьев находится в командировке.' },
      productionChief: { chance: 0.33, reply: 'Г-н Нэфф в данный момент находится в отпуске.' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: { chance: 0.65, reply: 'Вы не смогли связаться с президентом.' },
      mentor: {
        chance: 0.7,
        reply:
          '- К сожалению, г-н Стюарт сейчас находиться на семинаре во Франции. У вас нет возможности с ним связаться.',
      },
      financeVp: {
        chance: 0.5,
        reply: '- В финансовом подразделении проходит аудиторская проверка. Боюсь, г-ну Жану не до вас.',
      },
      productionVp: {
        chance: 0.3,
        reply: 'К сожалению, Н. Каменев отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      developmentVp: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      securityChief: {
        chance: 0.35,
        reply: '- У нас планируется выездное мероприятие, я должен проследить. Извините.',
      },
      auditChief: {
        chance: 0.3,
        reply: 'Елена сказала, что сейчас у нее переломный момент в ее проекте. Поэтому, она не хочет отвлекаться.',
      },
      financeDirector: {
        chance: 0.2,
        reply: 'К сожалению, Валентина Ивановна находится на больничном.',
      },
      accountant: {
        chance: 0.2,
        reply: '- Очень тронут… К сожалению, сейчас такая запарка…',
      },
      productionChief: {
        chance: 0.15,
        reply: 'К сожалению, Д. Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      salesDirector: {
        chance: 0.15,
        reply: '- Я польщена. К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: 'Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '-К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },
  // Период 4
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.38,
        reply: 'Вице-президент ответил Вам, что не видит необходимости присутствовать на мозговом штурме.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: 'Не думаю, что мне это интересно. Спасибо.' },
      accountant: { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      productionChief: { chance: 0.25, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      salesDirector: { chance: 0.25, reply: 'Александр, я очень занята в настоящее время.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.35, reply: 'Вы не смогли связаться с президентом.' },
      mentor: { chance: 0.33, reply: 'Я не планирую посещение Москвы в ближайшие две недели.' },
      financeVp: { chance: 0.3, reply: 'Очень занят.' },
      productionVp: { chance: 0.25, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      developmentVp: {
        chance: 0.25,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      securityChief: { chance: 0.3, reply: 'Боюсь мне не до штурмов, надо же за всеми присматривать.' },
      auditChief: {
        chance: 0.27,
        reply:
          'Александр, возможно меня это и заинтересовало бы, но к сожалению, в ближайшую неделю я буду на конференции.',
      },
      financeDirector: {
        chance: 0.24,
        reply: 'Извините, но мне скоро предстоит отчитываться перед руководством, мне не до штурмов.',
      },
      accountant: { chance: 0.25, reply: 'Очень занят... Проверки, отчеты… ну Вы понимаете.' },
      productionChief: {
        chance: 0.26,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      salesDirector: {
        chance: 0.26,
        reply: 'Я польщена. К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: '-К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.3, reply: 'Дело полезное! Я думаю, Вы и без меня справитесь.' },
      productionVp: { chance: 0.3, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      developmentVp: { chance: 0.2, reply: 'Не думаю, что есть смысл ходить на этот семинар. Спасибо.' },
      securityChief: { chance: 0.29, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      auditChief: { chance: 0.19, reply: 'Извините, Александр. Очень много дел навалилось.' },
      financeDirector: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      accountant: {
        chance: 0.15,
        reply: 'Интересно конечно, но боюсь, не смогу выкроить времени для посещения семинара.',
      },
      productionChief: { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      salesDirector: {
        chance: 0.2,
        reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: '-Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0.48, reply: 'Александр, Ты не прав!' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      accountant: { chance: 0.1, reply: 'К сожалению, не смогу присутствовать.' },
      productionChief: { chance: 0.15, reply: 'Это очень интересно. Но у меня сейчас такая запарка…' },
      salesDirector: {
        chance: 0.15,
        reply: 'Всегда интересно послушать высшее руководство, но, к сожалению, у меня много дел. ',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.5, reply: 'Извините, но это время у меня уже занято.' },
      productionVp: { chance: 0.5, reply: 'Г-н Каменев не смогу придти.' },
      developmentVp: { chance: 0.2, reply: 'Если у меня появится время, я зайду к Вам.' },
      securityChief: {
        chance: 0.26,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      auditChief: { chance: 0.4, reply: 'К сожалению, у меня назначено совещание в своем подразделении.' },
      financeDirector: {
        chance: 0.3,
        reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.',
      },
      accountant: { chance: 0.17, reply: 'Александр, не смогу посетить совещание, уезжаю в командировку.' },
      productionChief: {
        chance: 0.28,
        reply: 'К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      salesDirector: {
        chance: 0.27,
        reply:
          'Сегодня какой-то тяжелый день, голова просто раскалывается, наверное давление. Боюсь, я не выдержу еще одного совещания.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: 'Мне это неинтересно, спасибо.' },
      accountant: { chance: 0.29, reply: 'К сожалению, у меня много дел. Извините.' },
      productionChief: {
        chance: 0.3,
        reply: 'Александр, я неважно чувствовал себя на этой неделе, видимо простудился. Думаю, мне стоит рисковать…',
      },
      salesDirector: {
        chance: 0.26,
        reply:
          'Спасибо, Александр. Но эту неделю я что-то неважно себя чувствую. Думаю, в таком состоянии мне лучше не скакать…',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: { chance: 0.8, reply: 'Г-н президент находится в командировке.' },
      mentor: { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      financeVp: { chance: 0.6, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      productionVp: { chance: 0.5, reply: 'Очень занят. Не смогу посетить Вас.' },
      developmentVp: { chance: 0.4, reply: 'Спасибо, не смогу присутствовать, уезжаю в командировку.' },
      securityChief: {
        chance: 0.3,
        reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…',
      },
      auditChief: { chance: 0.5, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      financeDirector: { chance: 0.3, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      accountant: { chance: 0.18, reply: 'Сегодня был тяжелый день. Извините, что-то я очень устал.' },
      productionChief: { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      salesDirector: { chance: 0.32, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- В данный момент не могу уделить Вам ни минутки.',
      },
      accountant: {
        chance: 0.3,
        reply: '- Александр, я не могу постоянно тратить время якобы на очередное знакомство…',
      },
      productionChief: {
        chance: 0.3,
        reply: '- Сегодня был тяжелый день. Извините, что-то я неважно себя чувствую.',
      },
      salesDirector: {
        chance: 0.3,
        reply: '- Сегодня был тяжелый день. Извините, что-то я неважно себя чувствую.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: {
        chance: 0.75,
        reply: '- Александр, пока я не вижу необходимости в данном интервью.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.59,
        reply: 'Г-н Жан не сможет с Вами встретиться, в связи с очень плотным графиком работы.',
      },
      productionVp: {
        chance: 0.48,
        reply: 'Н. Каменев отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      developmentVp: {
        chance: 0.5,
        reply: 'К сожалению, Вице-президент отбыл в командировку.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0.55, reply: '- Очень занята. Извините' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.2,
        reply: '- Очень много дел, надо еще подготовить отчет… совсем нет времени.',
      },
      accountant: {
        chance: 0.1,
        reply: '- Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      productionChief: {
        chance: 0.18,
        reply: 'К сожалению, г-н Нэфф находится на презентации в одном из подразделении Компании.',
      },
      salesDirector: {
        chance: 0.21,
        reply: '- Александр, сегодня был тяжелый день, и я просто не в состоянии встретиться с Вами. Извините.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.5,
        reply:
          'К сожалению, в данный момент Валерий Молодцов не располагает свободным временем, чтобы встретиться с Вами.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.3, reply: '- Очень занят. Извините.' },
      productionVp: {
        chance: 0.2,
        reply: 'Встреча сорвалась, т.к. возникли неотложные дела, требующие присутствия г-на Каменева.',
      },
      developmentVp: {
        chance: 0.1,
        reply:
          'Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, наша встреча, пока не может состояться.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0.1, reply: 'Очень занята. Извините.' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: { chance: 0.2, reply: 'Ваше сообщение не было прочитано.' },
      mentor: {
        chance: 0.3,
        reply: 'К сожалению, Ваше сообщение не дошло до адресата.',
      },
      financeVp: {
        chance: 0.1,
        reply:
          '-Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      productionVp: {
        chance: 0.15,
        reply:
          '- Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      developmentVp: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      securityChief: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      auditChief: {
        chance: 0.1,
        reply:
          '- Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      financeDirector: {
        chance: 0.15,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      accountant: {
        chance: 0.11,
        reply: 'Вы не получили сообщение о доставке Вашего письма.',
      },
      productionChief: {
        chance: 0.16,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      salesDirector: {
        chance: 0.13,
        reply:
          ' - Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '-Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: ' - Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.2,
        reply: '- Извините, но мне нужно подготовиться к совещанию.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- В данный момент не могу уделить Вам ни минутки.',
      },
      accountant: {
        chance: 0.22,
        reply: '- Очень тронут… К сожалению, сейчас такая запарка…',
      },
      productionChief: {
        chance: 0.25,
        reply:
          '- Александр, я уезжаю в командировку, но если у Вас возникнут серьезные проблемы, поставьте меня в известность, пожалуйста.',
      },
      salesDirector: {
        chance: 0.22,
        reply: '- Очень много дел, надо еще подготовить отчет… совсем нет времени.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутствовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.2,
        reply: '- Спасибо, но мы не очень то любим, когда кто-то вмешивается в наши, бухгалтерские дела.',
      },
      accountant: { chance: 0.2, reply: '- Спасибо, не вижу необходимости.' },
      productionChief: { chance: 0.18, reply: '- Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.19,
        reply: '- Спасибо, Александр. Но мы уже справляемся своими силами.',
      },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения вопросов, стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0, reply: '' },
      accountant: {
        chance: 0.27,
        reply: 'Г-н Григорьев в данный момент находится в отпуске.',
      },
      productionChief: {
        chance: 0.27,
        reply:
          '- Спасибо, но я не уверен, что это согласуется с нашими текущими задачами, а выделять дополнительные ресурсы на этот проект я пока не готов.',
      },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: {
        chance: 0.6,
        reply: 'Г-н президент отбыл на один из заводов Компании, где сейчас проходит важное заседание.',
      },
      mentor: { chance: 0.6, reply: '- Мое время стоит денег, г-н Ливанов.' },
      financeVp: {
        chance: 0.4,
        reply: '- Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      productionVp: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      developmentVp: {
        chance: 0.1,
        reply: '- Извините, не смогу выкроить для Вас время. Очень занят.',
      },
      securityChief: { chance: 0.3, reply: '- Мне это неинтересно, спасибо.' },
      auditChief: {
        chance: 0.2,
        reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.',
      },
      financeDirector: {
        chance: 0.4,
        reply: '- Очень занята, проверка, отчеты… ну Вы понимаете.',
      },
      accountant: { chance: 0.17, reply: '- Извините Александр, очень много дел.' },
      productionChief: {
        chance: 0.21,
        reply: '- В данный момент не могу уделить Вам ни минутки.',
      },
      salesDirector: {
        chance: 0.17,
        reply:
          '- Александр, я бы хотела с Вами обсудить кое-какие вопросы по Вашему проекту, но к сожалению, в ближайшую неделю я буду на конференции.',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },

  // Период 5
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.8, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.2,
        reply: 'На эту неделю Валентина Ивановна запланировала обучение на семинаре.',
      },
      accountant: {
        chance: 0.24,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      productionChief: {
        chance: 0.26,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      salesDirector: {
        chance: 0.15,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.4, reply: 'Вы так и не смогли связаться с президентом.' },
      mentor: { chance: 0.5, reply: 'Спасибо, но у меня уже назначен ряд мероприятий на ближайшие 2 недели…' },
      financeVp: { chance: 0.3, reply: 'К сожалению, у меня много дел. Извините.' },
      productionVp: {
        chance: 0.22,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      developmentVp: { chance: 0.25, reply: 'Г-н Карташов в командировке.' },
      securityChief: { chance: 0.3, reply: 'Спасибо, но мне это неинтересно.' },
      auditChief: { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      financeDirector: { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      accountant: { chance: 0.23, reply: 'Боюсь, что не смогу Вам помочь, ввиду своей занятости.' },
      productionChief: {
        chance: 0.2,
        reply:
          'Г-н Нэфф в письме к Вам извинился, что не может участвовать, т.к. в ближайшую неделю его не будет в Москве.',
      },
      salesDirector: {
        chance: 0.27,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.3, reply: 'Спасибо, не думаю, что мне это интересно.' },
      productionVp: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      developmentVp: { chance: 0.23, reply: 'Г-н Карташов в командировке.' },
      securityChief: { chance: 0.3, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      auditChief: {
        chance: 0.25,
        reply: 'К сожалению, не смогу присутствовать. Некоторые дела требуют моего присутствия.',
      },
      financeDirector: { chance: 0.26, reply: 'К сожалению, Валентина Ивановна заболела.' },
      accountant: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      productionChief: { chance: 0.2, reply: 'Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.25,
        reply: 'Александр, я бы хотела поучаствовать, только я завтра уезжаю на завод.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      accountant: { chance: 0.25, reply: 'Очень занят. Проверка, отчеты… ну Вы понимаете.' },
      productionChief: { chance: 0.27, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      salesDirector: {
        chance: 0.25,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.5,
        reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета.',
      },
      productionVp: {
        chance: 0.5,
        reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета',
      },
      developmentVp: {
        chance: 0.5,
        reply: 'Александр, не смогу посетить Вас, но на это время назначено заседание Управляющего Совета',
      },
      securityChief: { chance: 0.3, reply: 'Спасибо. Не думаю, что мне это будет интересно.' },
      auditChief: { chance: 0.5, reply: 'Не смогу, уже назначено другое совещание.' },
      financeDirector: {
        chance: 0.35,
        reply: 'Г-н Ливанов, я не смогу посетить ваше совещание. Очень занята.',
      },
      accountant: {
        chance: 0.2,
        reply: 'Александр, сегодня был очень тяжелый день. Боюсь я не в состоянии посетить ваше совещание.',
      },
      productionChief: {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      salesDirector: {
        chance: 0.3,
        reply: 'Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: 'Не думаю, что мне это интересно…' },
      accountant: { chance: 0.2, reply: 'Спасибо, но я не смогу вырваться.' },
      productionChief: { chance: 0.3, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: {
        chance: 0.26,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      mentor: { chance: 0.7, reply: 'В ближайшую неделю я не планировал посещение Вашей компании.' },
      financeVp: { chance: 0.6, reply: 'Очень занят. Не смогу посетить Вас.' },
      productionVp: { chance: 0.5, reply: 'Спасибо за приглашение. Очень занят. Не смогу посетить Вас.' },
      developmentVp: { chance: 0.4, reply: '-К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      securityChief: {
        chance: 0.4,
        reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.',
      },
      auditChief: { chance: 0.2, reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.' },
      financeDirector: { chance: 0.4, reply: 'Спасибо, но такие мероприятия не по мне…' },
      accountant: { chance: 0.2, reply: 'Г-н Григорьев плохо почувствовал себя к вечеру.' },
      productionChief: {
        chance: 0.3,
        reply: 'Спасибо, Александр. Но я небольшой поклонник русских вечеринок.',
      },
      salesDirector: { chance: 0.35, reply: 'Спасибо, у меня уже есть планы на вечер.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: '- Спасибо, не вижу необходимости.' },
      accountant: {
        chance: 0.3,
        reply: 'Ваша встреча сорвалась, т.к. г-н Григорьев был вызван к руководству.',
      },
      productionChief: { chance: 0.3, reply: '- Александр… мы же знакомы.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: {
        chance: 0.5,
        reply: '- Управлять Компанией совсем не просто. Не могу уделить Вам время.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.4, reply: '- Очень занят. Извините' },
      productionVp: {
        chance: 0.3,
        reply: 'Г-н Каменев не сможет с Вами встретиться, в связи с очень плотным графиком работы.',
      },
      developmentVp: { chance: 0.3, reply: '- Очень занят. Извините' },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.44,
        reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.26,
        reply: '- У меня на носу проверка… Не смогу уделить Вам время.',
      },
      accountant: {
        chance: 0.15,
        reply: '- Извините, Александр… мне предстоит отчет перед начальством. Мне надо подготовиться.',
      },
      productionChief: { chance: 0.2, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.4,
        reply: 'Г-н президент был срочно вызван на совещание в головной холдинг. Ваша встреча сорвалась.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.2,
        reply: '- В финансовом подразделении проходит аудиторская проверка. Боюсь, г-ну Жану не до вас.',
      },
      productionVp: {
        chance: 0.2,
        reply: 'В данный момент г-н Каменев находится на обучении.',
      },
      developmentVp: {
        chance: 0.1,
        reply:
          '- Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, наша встреча, пока не может состояться.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.1,
        reply: '- Не смогу уделить Вам время, накопилось очень много нерешенных вопросов.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      mentor: {
        chance: 0.1,
        reply: '- Г-н Ливанов, ваше сообщение мне не удалось прочитать.',
      },
      financeVp: {
        chance: 0.1,
        reply:
          ' - Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      productionVp: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      developmentVp: { chance: 0.1, reply: 'Ваше сообщение не было прочитано.' },
      securityChief: {
        chance: 0.1,
        reply: 'Во время отправки сообщения произошел сбой на почтовом сервере, Ваше сообщения не дошло до адресата.',
      },
      auditChief: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено в приемной Елены Крыловой, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      financeDirector: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено Валентиной Ивановной, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      accountant: {
        chance: 0.15,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      productionChief: {
        chance: 0.1,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'Вы не получили сообщение о доставке Вашего письма.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: '- Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.1,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. К сожалению я не могу уделить Вам время.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- Извините, у меня на носу плановый отчет, мне надо подготовиться.',
      },
      accountant: {
        chance: 0.2,
        reply: '- Извини, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      productionChief: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      salesDirector: {
        chance: 0.25,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутствовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.26,
        reply: '- Спасибо, но мы не очень то любим, когда кто-то вмешивается в наши, бухгалтерские дела.',
      },
      accountant: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      productionChief: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Спасибо, Александр. Но мы уже справляемся своими силами.',
      },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0.15, reply: 'Г-н Григорьев находится в командировке.' },
      productionChief: { chance: 0.15, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: {
        chance: 0.5,
        reply: 'Пока Вы не получили из приемной президента никакого ответа.',
      },
      mentor: { chance: 0.8, reply: '- Г-н Ливанов, мое время стоит денег.' },
      financeVp: { chance: 0.3, reply: '- К сожалению, у меня много дел. Извините.' },
      productionVp: {
        chance: 0.25,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      developmentVp: {
        chance: 0.1,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      securityChief: { chance: 0.3, reply: '- Не думаю, что смогу Вам чем-то помочь.' },
      auditChief: {
        chance: 0.2,
        reply:
          '- Прошу прощения, но думаю, что сейчас из меня никудышный помощник. У меня сейчас очень важный этап в работе.',
      },
      financeDirector: {
        chance: 0.3,
        reply: '- Очень занята, проверка, отчеты… ну Вы понимаете.',
      },
      accountant: { chance: 0.2, reply: '- Извините, у меня запарка…' },
      productionChief: {
        chance: 0.2,
        reply: '- Александр, к сожалению, не смогу уделить Вам время.',
      },
      salesDirector: {
        chance: 0.28,
        reply: '- Боюсь, что не смогу Вам помочь, ввиду своей занятости.',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },

  // Период 6
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.6,
        reply: 'Не вижу необходимости моего присутствия, я думаю, Вы справитесь сами.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.35, reply: 'Очень занят. Извините.' },
      accountant: { chance: 0.28, reply: 'Г-н Григорьев в командировке.' },
      productionChief: {
        chance: 0.35,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      salesDirector: { chance: 0.34, reply: 'Спасибо, не вижу необходимости.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: - Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.5, reply: 'Очень занят. Извините.' },
      mentor: { chance: 0.5, reply: 'В ближайшую неделю я не планировал посещение России.' },
      financeVp: { chance: 0.35, reply: 'Г-н Жан так и не ответил на Ваше предложение.' },
      productionVp: { chance: 0.35, reply: 'Г-н Карташов в командировке.' },
      developmentVp: { chance: 0.3, reply: 'Очень занят. Извините.' },
      securityChief: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      auditChief: { chance: 0.35, reply: 'К сожалению, вы не получили никакого ответа.' },
      financeDirector: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      accountant: {
        chance: 0.18,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу участвовать.',
      },
      productionChief: {
        chance: 0.3,
        reply: 'Г-н Нэфф не смог участвовать, т.к. возникли неотложные дела, требующие его присутствия.',
      },
      salesDirector: {
        chance: 0.2,
        reply: 'Извините, г-н Ливанов, на это время у Ирины уже назначена важная встреча.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.15,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.1,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.3, reply: 'Очень занят. Извините.' },
      productionVp: {
        chance: 0.3,
        reply: 'Г-н Каменев не смог посетить семинар, т.к. возникли неотложные дела, требующие его присутствия.',
      },
      developmentVp: {
        chance: 0.3,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      securityChief: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      auditChief: { chance: 0.35, reply: 'Александр, сейчас я очень занят. ' },
      financeDirector: {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      accountant: { chance: 0.3, reply: 'Очень занят. Извините.' },
      productionChief: { chance: 0.35, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      salesDirector: {
        chance: 0.36,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      accountant: { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      productionChief: {
        chance: 0.3,
        reply: 'К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      salesDirector: {
        chance: 0.33,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.8, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      productionVp: { chance: 0.5, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      developmentVp: { chance: 0.2, reply: 'Не смогу прийти, думаю, Вы и без меня прекрасно справитесь.' },
      securityChief: { chance: 0.35, reply: 'Г-н Михайловский в командировке.' },
      auditChief: { chance: 0.34, reply: 'У меня уже назначена встреча на это время.' },
      financeDirector: {
        chance: 0.24,
        reply: 'Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      accountant: {
        chance: 0.2,
        reply: 'Извините, г-н Ливанов, на это время у г-на Григорьева уже назначена важная встреча.',
      },
      productionChief: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      salesDirector: { chance: 0.3, reply: 'Очень занята. Извините.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.35, reply: 'Александр, к сожалению, не смогу уделить Вам время.' },
      accountant: {
        chance: 0.32,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      productionChief: { chance: 0.4, reply: 'Очень занят. Извините.' },
      salesDirector: {
        chance: 0.45,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: { chance: 0.9, reply: 'Вы не получили ответа на свое приглашение.' },
      mentor: { chance: 1.0, reply: 'В ближайшую неделю я не планировал посещение России.' },
      financeVp: { chance: 0.45, reply: 'У меня уже запланировано это время. Извините.' },
      productionVp: { chance: 0.45, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      developmentVp: { chance: 0.26, reply: 'Как-то я не настроен на вечеринку. Спасибо за приглашение.' },
      securityChief: { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      auditChief: { chance: 0.45, reply: 'У меня были другие планы на этот вечер. Спасибо за приглашение.' },
      financeDirector: { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      accountant: { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      productionChief: {
        chance: 0.4,
        reply: 'Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.',
      },
      salesDirector: {
        chance: 0.3,
        reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: '- Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств."',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      accountant: {
        chance: 0.3,
        reply: 'Встреча сорвалась, т.к. возникли неотложные дела, требующие присутствия г-на Григорьева.',
      },
      productionChief: {
        chance: 0.3,
        reply: '- Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      salesDirector: {
        chance: 0.3,
        reply: '- Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: {
        chance: 0.4,
        reply: 'К сожалению, на этой неделе у г-на президента очень плотный график.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.3, reply: '- Очень занят. Извините' },
      productionVp: {
        chance: 0.2,
        reply: '- В производственном управлении проходит сдача нового объекта. Боюсь, г-ну Каменеву не до вас.',
      },
      developmentVp: {
        chance: 0.1,
        reply: 'К сожалению, Вице-президент отбыл в командировку.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0.2, reply: '- Очень много дел. Не смогу уделить Вам время.' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.3, reply: 'К сожалению, вы не получили никакого ответа.' },
      accountant: { chance: 0.15, reply: '- Очень занят. Извините.' },
      productionChief: {
        chance: 0.2,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      salesDirector: { chance: 0.16, reply: 'Г-жа Александрова в командировке.' },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел.',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.4,
        reply: 'В приемной Вам сообщили, что президент не сможет встретиться с Вами.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.3,
        reply:
          '- Возникли срочные проблемы, требующие моего вмешательства. Так что, боюсь, наша встреча, пока не может состояться.',
      },
      productionVp: {
        chance: 0.2,
        reply: 'К сожалению, Вице-президент отбыл в командировку.',
      },
      developmentVp: {
        chance: 0.25,
        reply: 'Встреча сорвалась, т.к. возникли неотложные дела, требующие присутствия г-на Карташова.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.3,
        reply:
          '- Не смогу уделить Вам время, накопилось очень много вопросов, требующих моего участия в их разрешении.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: { chance: 0.2, reply: 'Ваше сообщение не было прочитано.' },
      mentor: {
        chance: 0.2,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      financeVp: {
        chance: 0.15,
        reply:
          'Ваше сообщение не было получено в приемной Вице-президента по финансам. Наверное, произошел какой-то сбой при отправке сообщения.',
      },
      productionVp: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      developmentVp: {
        chance: 0.15,
        reply:
          '-Александр, мне выдалось предупреждение о том, что Ваше сообщение содержит вирус. Я не буду его читать.',
      },
      securityChief: {
        chance: 0.1,
        reply: 'Во время отправки сообщения произошел сбой на почтовом сервере, Ваше сообщения не дошло до адресата.',
      },
      auditChief: {
        chance: 0.1,
        reply: 'По каким-то причинам Ваше сообщение не дошло до адресата.',
      },
      financeDirector: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено Валентиной Ивановной, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      accountant: {
        chance: 0.15,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      productionChief: {
        chance: 0.1,
        reply: '- Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'Вы не получили сообщение о доставке Вашего письма.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: '- Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.1,
        reply: '- Извините, но мне нужно подготовиться к совещанию.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.3,
        reply: '- Извините, у меня на носу плановый отчет, мне надо подготовиться.',
      },
      accountant: {
        chance: 0.15,
        reply: '- Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.',
      },
      productionChief: {
        chance: 0.2,
        reply: '- Александр, к сожалению, не смогу уделить Вам время.',
      },
      salesDirector: { chance: 0.24, reply: 'Г-жа Александрова в командировке.' },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутствовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.26,
        reply: '- Спасибо, но мы не очень то любим, когда кто-то вмешивается в наши, бухгалтерские дела.',
      },
      accountant: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      productionChief: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Спасибо, Александр. Но мы уже справляемся своими силами.',
      },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к, сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0.3, reply: '- Не вижу смысла.' },
      productionChief: { chance: 0.25, reply: 'Г-н Михайловский в командировке.' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: {
        chance: 0.5,
        reply: 'Г-н президент отбыл на один из заводов Компании, где сейчас проходит важное заседание.',
      },
      mentor: { chance: 0.7, reply: '- Г-н Ливанов, мое время стоит денег.' },
      financeVp: { chance: 0.4, reply: 'Г-н Жан так и не ответил на Вашу просьбу.' },
      productionVp: { chance: 0.33, reply: '- К сожалению, у меня много дел. Извините.' },
      developmentVp: {
        chance: 0.2,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      securityChief: { chance: 0.3, reply: '- Очень занят. Извините.' },
      auditChief: {
        chance: 0.3,
        reply: '- К сожалению, пока я не могу выкроить для вас время.',
      },
      financeDirector: {
        chance: 0.3,
        reply: 'На эту неделю Валентина Ивановна запланировала обучение на семинаре.',
      },
      accountant: { chance: 0.25, reply: '- Извини, у меня запарка…' },
      productionChief: { chance: 0.3, reply: 'К сожалению, вы не получили никакого ответа.' },
      salesDirector: { chance: 0.25, reply: '- Очень занята. Извините.' },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },

  // Период 7
  {
    brainStorm: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0.65, reply: 'Не вижу смысла в этом.' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.33,
        reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      accountant: { chance: 0.25, reply: 'Не вижу смысла в этом.' },
      productionChief: {
        chance: 0.22,
        reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      salesDirector: {
        chance: 0.2,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      hrDirector: {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      prDirector: {
        chance: 0.2,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.6,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      itChief: {
        chance: 0.3,
        reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      rndDeputy: {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    },
    askingGuru: {
      president: { chance: 0.5, reply: 'Не вижу смысла…' },
      mentor: { chance: 0.7, reply: 'Г-н Ливанов, мое время стоит денег.' },
      financeVp: { chance: 0.4, reply: 'У меня уже назначена встреча на это время.' },
      productionVp: {
        chance: 0.4,
        reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      developmentVp: { chance: 0.4, reply: 'Очень занят. Извините.' },
      securityChief: { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      auditChief: { chance: 0.4, reply: 'Очень занят. Извините.' },
      financeDirector: { chance: 0.3, reply: 'Не вижу смысла в этом.' },
      accountant: { chance: 0.28, reply: 'Извините, у меня запарка…' },
      productionChief: {
        chance: 0.2,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      salesDirector: { chance: 0.28, reply: 'Ирина находится в командировке.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      hrDirector: { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      prDirector: { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.5,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      itChief: {
        chance: 0.2,
        reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      implementationChief: {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    },
    externalProvidersSeminar: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.55, reply: 'Не смогу быть. Спасибо за приглашение.' },
      productionVp: { chance: 0.34, reply: 'Не вижу смысла в этом.' },
      developmentVp: { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      securityChief: { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      auditChief: { chance: 0.6, reply: 'Не вижу смысла в этом.' },
      financeDirector: { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      accountant: { chance: 0.25, reply: 'Г-н Григорьев находится в командировке.' },
      productionChief: { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      salesDirector: {
        chance: 0.35,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    learningEvent: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.34, reply: 'Извините, у меня запарка…' },
      accountant: {
        chance: 0.27,
        reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.',
      },
      productionChief: {
        chance: 0.37,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      salesDirector: { chance: 0.3, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.54, reply: 'У меня уже назначена встреча на это время.' },
      productionVp: {
        chance: 0.45,
        reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.',
      },
      developmentVp: { chance: 0.35, reply: 'Очень занят. Извините.' },
      securityChief: { chance: 0.35, reply: 'Спасибо, мне это не интересно.' },
      auditChief: { chance: 0.38, reply: 'У меня уже назначена встреча на это время.' },
      financeDirector: {
        chance: 0.23,
        reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      accountant: { chance: 0.21, reply: 'Очень занят. Извините.' },
      productionChief: {
        chance: 0.31,
        reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.',
      },
      salesDirector: { chance: 0.33, reply: 'Извините, у меня запарка…' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      hrDirector: { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      prDirector: { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      itChief: { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.3,
        reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.',
      },
      rndDeputy: {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      implementationChief: {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      analysisChief: {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    },
    teamBuildingTraining: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.34,
        reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…',
      },
      accountant: { chance: 0.25, reply: 'Спасибо, но я не смогу вырваться.' },
      productionChief: { chance: 0.3, reply: 'Александр, к сожалению, не смогу выкроить время.' },
      salesDirector: { chance: 0.4, reply: 'Очень занята. Извините.' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      hrDirector: {
        chance: 0.6,
        reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.',
      },
      prDirector: { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      itChief: { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      rndDeputy: {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    },
    privateParty: {
      president: {
        chance: 1.0,
        reply: 'Я не поклонник таких мероприятий. Желаю Вам хорошо отметить Ваш успех.',
      },
      mentor: { chance: 1.0, reply: 'Спасибо, но меня не будет в России в этот период.' },
      financeVp: { chance: 0.8, reply: 'Не смогу быть. Спасибо за приглашение.' },
      productionVp: { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      developmentVp: { chance: 0.3, reply: 'К сожалению, я не важно себя чувствую.' },
      securityChief: { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      auditChief: { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошего вечера.' },
      financeDirector: { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      accountant: { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      productionChief: {
        chance: 0.4,
        reply: '- Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.',
      },
      salesDirector: {
        chance: 0.3,
        reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      hrDirector: {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      prDirector: { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      itChief: {
        chance: 0.2,
        reply: '- "Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти."',
      },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      rndDeputy: {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      itSupportChief: {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      implementationChief: {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    },

    // Индивидуальные
    meetingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.4,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      accountant: {
        chance: 0.4,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      productionChief: { chance: 0.45, reply: '- Очень занят. Извините.' },
      salesDirector: {
        chance: 0.58,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    topManagerInterview: {
      president: { chance: 0.4, reply: 'Не поступило никакого ответа.' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0.2, reply: '- Очень занят. Извините.' },
      productionVp: {
        chance: 0.2,
        reply: '- К сожалению, все мое время на эту неделю уже расписано.',
      },
      developmentVp: {
        chance: 0.1,
        reply: '- К сожалению, все мое время на эту неделю уже расписано.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.3,
        reply: 'Елена не сможет с Вами встретиться, в связи с очень плотным графиком работы.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    employeePrivateMeeting: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.4, reply: '- Очень занята. Извините.' },
      accountant: {
        chance: 0.4,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      productionChief: { chance: 0.35, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: {
        chance: 0.33,
        reply: '- Александр, Вы уверены что эта встреча необходима? Я - нет…',
      },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      logisticsDirector: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта.',
      },
      salesDeputy: {
        chance: 0.15,
        reply: '- К сожалению, в настоящее время нет возможности обсудить вместе с Вами ход данного проекта',
      },
      supplyDeputy: {
        chance: 0.5,
        reply:
          'Заместитель по закупкам сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      hrDirector: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      prDirector: { chance: 0.4, reply: '- У меня много дел. Извините.' },
      newspaperEditor: {
        chance: 0.2,
        reply:
          '- Благодарю Вас за обращение, но мой рабочий график посещения центрального офиса в ближайшее время очень плотен.',
      },
      marketingChief: { chance: 0.5, reply: '- Мне сейчас некогда. Пришлите мне письмо.' },
      itChief: {
        chance: 0.3,
        reply: '- У нас в сети завелся вирус! Весь отдел стоит на ушах… Извините. ',
      },
      chiefOfStaff: {
        chance: 0.3,
        reply: '- Извините в ближайшее время у меня много неотложных дел',
      },
      legalChief: { chance: 0.5, reply: '- Давайте отложим встречу на потом…' },
      rndDeputy: {
        chance: 0.15,
        reply:
          'Ваш заместитель сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      itSupportChief: {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
      analysisChief: {
        chance: 0.2,
        reply:
          'Начальник группы анализа и разработки изменений сообщил Вам, что в настоящее время он, к сожалению, очень сильно занят и не может найти время для личной встречи.',
      },
    },
    meetingTopManager: {
      president: {
        chance: 0.58,
        reply: '- Очень много дел, но я очень доволен вашими результатами.',
      },
      mentor: { chance: 0, reply: '' },
      financeVp: {
        chance: 0.5,
        reply: 'Г-н Жан не сможет с Вами встретиться, в связи с очень плотным графиком работы.',
      },
      productionVp: {
        chance: 0.41,
        reply: 'Г-на Н.Каменева срочно вызвал президент. Ваша встреча сорвалась.',
      },
      developmentVp: {
        chance: 0.3,
        reply: 'Было созвано совещание топ-менеджеров Компании. Ваша встреча сорвалась.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: {
        chance: 0.3,
        reply: 'Было созвано совещание топ-менеджеров Компании. Ваша встреча сорвалась.',
      },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0, reply: '' },
      productionChief: { chance: 0, reply: '' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: { chance: 0, reply: '' },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: { chance: 0, reply: '' },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    privateEmail: {
      president: {
        chance: 0.15,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      mentor: {
        chance: 0.3,
        reply: 'К сожалению, Ваше сообщение не дошло до адресата.',
      },
      financeVp: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      productionVp: {
        chance: 0.15,
        reply: 'К сожалению, Ваше сообщение не дошло до адресата.',
      },
      developmentVp: {
        chance: 0.1,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      securityChief: {
        chance: 0.1,
        reply: 'Во время отправки сообщения произошел сбой на почтовом сервере, Ваше сообщения не дошло до адресата.',
      },
      auditChief: {
        chance: 0.1,
        reply: 'К сожалению, Ваше сообщение не дошло до адресата.',
      },
      financeDirector: {
        chance: 0.1,
        reply:
          'Ваше сообщение не было получено Валентиной Ивановной, возможно, произошел какой-то сбой при отправке сообщения.',
      },
      accountant: {
        chance: 0.15,
        reply: 'Похоже, произошел какой-то сбой. Ваше сообщение так и не дошло до адресата.',
      },
      productionChief: {
        chance: 0.1,
        reply: ' - Г-н Ливанов, ваше сообщение мне не удалось прочитать. Какие-то непонятные символы.',
      },
      salesDirector: {
        chance: 0.1,
        reply: 'Вы не получили сообщение о доставке Вашего письма.',
      },
      factoryDirector: {
        chance: 0.1,
        reply:
          'Сообщение из секретариата Директора завода К: Г-н Шевцов в настоящее время находится вне офиса, и не имеет возможности ознакомится с содержанием Вашего сообщения.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Предлагаю вернуться к данной теме несколько позже, извините - сильно занят.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель по закупкам could not be delivered. Please contact your system administrator.',
      },
      hrDirector: {
        chance: 0.5,
        reply: 'Михаил случайно удалил Ваше письмо, так и не прочитав.',
      },
      prDirector: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      itChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      chiefOfStaff: {
        chance: 0.05,
        reply: '- Я рассмотрю Ваше предложение позже, когда у меня будет больше информации об этом вопросе.',
      },
      legalChief: {
        chance: 0.3,
        reply: 'На сервере произошел сбой. Ваше письмо не доставлено…',
      },
      rndDeputy: {
        chance: 0.6,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Заместитель начальника ОСР could not be delivered. Please contact your system administrator.',
      },
      itSupportChief: {
        chance: 0.25,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы информационной поддержки could not be delivered. Please contact your system administrator.',
      },
      implementationChief: {
        chance: 0.15,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы внедрения изменений could not be delivered. Please contact your system administrator.',
      },
      analysisChief: {
        chance: 0.1,
        reply:
          'Вы получили e-mail следующего содержания: messsage to Начальник группы анализа и разработки изменений could not be delivered. Please contact your system administrator.',
      },
    },
    askingColleagueAdvise: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: {
        chance: 0.2,
        reply: '- Извините, но мне нужно подготовиться к совещанию.',
      },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0.28, reply: 'К сожалению, Валентина Ивановна заболела.' },
      accountant: { chance: 0.24, reply: '- Очень занят. Извините.' },
      productionChief: {
        chance: 0.3,
        reply: '- Александр, к сожалению, не смогу уделить Вам время.',
      },
      salesDirector: { chance: 0.25, reply: 'Г-жа Александрова находится в командировке.' },
      factoryDirector: {
        chance: 0.2,
        reply:
          '- Вряд ли я смогу сообщить Вам что-либо новое, отличное от того, с чем Вы, вероятно, уже знакомы, приняв дела от Вашего предшественника.',
      },
      logisticsDirector: {
        chance: 0.1,
        reply: '- Вряд ли смогу посоветовать Вам в деле, целесообразность которого для меня пока не очевидна. ',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: {
        chance: 0.45,
        reply: 'Заместитель по закупкам, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      hrDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      prDirector: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0.3, reply: '- Извините, я сейчас занята.' },
      itChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      chiefOfStaff: {
        chance: 0.15,
        reply: '- Пока я не считаю себя способной помочь Вам, извините.',
      },
      legalChief: { chance: 0.3, reply: '- Извините, я сейчас занят.' },
      rndDeputy: {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, отсутствовал на рабочем месте, когда Вы пришли к нему.',
      },
      itSupportChief: {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      implementationChief: {
        chance: 0.1,
        reply: 'Начальник группы внедрения изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
      analysisChief: {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был очень занят и не смог Вас принять в этот день.',
      },
    },
    helpingColleagues: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: {
        chance: 0.26,
        reply: '- Спасибо, но мы не очень то любим, когда кто-то вмешивается в наши, бухгалтерские дела.',
      },
      accountant: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      productionChief: { chance: 0.25, reply: '- Спасибо, не вижу необходимости.' },
      salesDirector: {
        chance: 0.2,
        reply: '- Спасибо, Александр. Но мы уже справляемся своими силами.',
      },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Спасибо за желание помочь, но к, сожалению, не вижу возможности Вашего участия в делах завода в настоящее время.',
      },
      logisticsDirector: {
        chance: 0.4,
        reply:
          '- Спасибо, но вынужден отказаться от Вашего предложения, т.к. считаю, что оно несколько преждевременно.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.6,
        reply: '- Не стоит отвлекать своих сотрудников такими мелочами.',
      },
      prDirector: { chance: 0.3, reply: '- Спасибо, но мне ваша помощь не нужна.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я справляюсь со своей работой сама.',
      },
      itChief: {
        chance: 0.4,
        reply: '- Я думаю что вряд ли кто-то из ваших сотрудников понимает что-нибудь в IT. Но все равно спасибо.',
      },
      chiefOfStaff: {
        chance: 0.2,
        reply:
          '- Спасибо, но я считаю, что для успешного решения, вопросов стоящих перед УД, нужен существенный опыт работы в нашей организации.',
      },
      legalChief: {
        chance: 0.5,
        reply: '- Спасибо, не стоит. Как Вы себе это представляете? У вас же работают не юристы.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    pilotProject: {
      president: { chance: 0, reply: '' },
      mentor: { chance: 0, reply: '' },
      financeVp: { chance: 0, reply: '' },
      productionVp: { chance: 0, reply: '' },
      developmentVp: { chance: 0, reply: '' },
      securityChief: { chance: 0, reply: '' },
      auditChief: { chance: 0, reply: '' },
      financeDirector: { chance: 0, reply: '' },
      accountant: { chance: 0.35, reply: '- Не вижу смысла в этом.' },
      productionChief: { chance: 0.33, reply: 'Г-н Нэфф находится в командировке.' },
      salesDirector: { chance: 0, reply: '' },
      factoryDirector: {
        chance: 1.0,
        reply:
          '- Извините, но я считаю что действующее производство не совсем подходит для проведения экспериментов без достаточной, на мой взгляд, проработки.',
      },
      logisticsDirector: {
        chance: 0.99,
        reply: '- Не могу разделить вашего мнения о целесообразности проведения данного мероприятия в настоящее время.',
      },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: { chance: 0, reply: '' },
      prDirector: { chance: 0, reply: '' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: { chance: 0, reply: '' },
      itChief: { chance: 0, reply: '' },
      chiefOfStaff: {
        chance: 0.95,
        reply: '- Участие сотрудников УД в проекте на данной стадии реализации считаю нецелесообразным. Извините.',
      },
      legalChief: { chance: 0, reply: '' },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
    usingColleagueAsExport: {
      president: { chance: 0.6, reply: '- Думаю, мои советы Вам уже не нужны.' },
      mentor: { chance: 0.7, reply: '- Г-н Ливанов, мое время стоит денег.' },
      financeVp: { chance: 0.5, reply: '- Очень занят. Извините.' },
      productionVp: {
        chance: 0.42,
        reply: '- Прошу прощения, мне надо отследить подготовку к плановой проверке.',
      },
      developmentVp: {
        chance: 0.2,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      securityChief: { chance: 0.3, reply: '- Очень занят. Извините.' },
      auditChief: {
        chance: 0.54,
        reply: '- Возникли срочные проблемы, требующие моего вмешательства. Сейчас Вас выслушать я не могу.',
      },
      financeDirector: {
        chance: 0.34,
        reply: '- Очень занята, проверка, отчеты… ну Вы понимаете.',
      },
      accountant: { chance: 0.3, reply: 'Г-н Григорьев в командировке.' },
      productionChief: { chance: 0.28, reply: '- Очень занят. Извините.' },
      salesDirector: {
        chance: 0.34,
        reply: '- К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.',
      },
      factoryDirector: {
        chance: 0.3,
        reply:
          '- В настоящее время из-за загруженности  нет возможности подготовки проработанного экспертного заключения.',
      },
      logisticsDirector: { chance: 0, reply: '' },
      salesDeputy: { chance: 0, reply: '' },
      supplyDeputy: { chance: 0, reply: '' },
      hrDirector: {
        chance: 0.5,
        reply: '- Звучит заманчиво, но вряд ли у меня получится выкроить время.',
      },
      prDirector: { chance: 0.2, reply: '- Спасибо за доверие, но я довольно занят.' },
      newspaperEditor: { chance: 0, reply: '' },
      marketingChief: {
        chance: 0.3,
        reply: '- Спасибо, но я вряд ли смогу выступать в качестве эксперта…',
      },
      itChief: {
        chance: 0.3,
        reply: '- Александр, извините, но у меня сейчас очень много работы.',
      },
      chiefOfStaff: {
        chance: 0.5,
        reply: '- К сожалению, вынуждена отказаться от Вашего предложение, вследствие большой занятости.',
      },
      legalChief: {
        chance: 0.3,
        reply:
          '- Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      rndDeputy: { chance: 0, reply: '' },
      itSupportChief: { chance: 0, reply: '' },
      implementationChief: { chance: 0, reply: '' },
      analysisChief: { chance: 0, reply: '' },
    },
  },
]
