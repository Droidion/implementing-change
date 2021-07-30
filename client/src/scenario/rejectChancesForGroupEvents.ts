import type { RejectChance } from '../types/RejectChance'
import { RejectChancesCollection } from '../types/RejectChance'

// Шансы и текстовые реакции каждого персонажа на отказ в участии в каждом групповом мероприятии в каждом периоде
// period - event - character

const clean: RejectChancesCollection = [
  // Период 1
  {
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
      prDirector: { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
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
      salesDirector: { chance: 0.4, reply: 'Не уверена, что понимаю смысл этого действия в  данный момент. Извините.' },
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
      itChief: { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.' },
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
      salesDirector: { chance: 0.4, reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.' },
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
      salesDirector: { chance: 0.4, reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.' },
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
      developmentVp: { chance: 0.4, reply: 'Александр, не смогу быть, но жду от Вас отчета о прошедшем совещании.' },
      securityChief: { chance: 0.4, reply: 'Сергей Александрович в настоящее время находится в командировке.' },
      auditChief: { chance: 0.8, reply: 'Елена Крылова не сможет посетить Ваше совещание.' },
      financeDirector: { chance: 0.9, reply: 'Я в это же время назначил совещание для своих сотрудников.' },
      accountant: { chance: 0.35, reply: 'Извините, но я не вижу потребности в моем присутствии на Вашем совещании.' },
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
      legalChief: { chance: 0.3, reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.' },
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
      productionChief: { chance: 0.4, reply: 'Александр, не думаю, что мне это нужно, да и работы сейчас полно.' },
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
      securityChief: { chance: 0.6, reply: 'Спасибо за приглашение. Предпочитаю вечерами все таки отдыхать дома.' },
      auditChief: { chance: 0.6, reply: 'Александр, спасибо за приглашение, но у меня уже есть планы.' },
      financeDirector: { chance: 0.5, reply: 'Спасибо за приглашение. У меня уже есть планы на этот вечер.' },
      accountant: { chance: 0.6, reply: 'Спасибо, но такое времяпровождение не по мне.' },
      productionChief: { chance: 0.5, reply: 'Спасибо за приглашение, но у меня уже были планы на этот вечер.' },
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
      prDirector: { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
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
      financeDirector: { chance: 0.3, reply: 'Боюсь мне не до штурмов, на носу очередная аудиторская проверка.' },
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
      itChief: { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне присутствовать на вашем совещании.' },
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
      financeVp: { chance: 0.6, reply: 'В настоящее время Вице-президент по финансам находится в командировке.' },
      productionVp: {
        chance: 0.45,
        reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.',
      },
      developmentVp: { chance: 0.2, reply: 'К сожалению, Кирилл Карташов в данный момент находится на больничном.' },
      securityChief: { chance: 0.4, reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…' },
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
      legalChief: { chance: 0.3, reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.' },
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
      salesDirector: { chance: 0.4, reply: 'А что Вы планируете? Ой, совсем забыла, к сожалению, не смогу быть.' },
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
      financeDirector: { chance: 0.3, reply: 'Извините, у меня на носу плановый отчет, мне надо подготовиться.' },
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
      securityChief: { chance: 0.3, reply: 'У нас планируется выездное мероприятие, я должен проследить. Извините.' },
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
      itChief: { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.' },
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
      productionVp: { chance: 0.33, reply: 'Извините, очень занят. Не смогу выкроить время для посещения семинара.' },
      developmentVp: { chance: 0.3, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      securityChief: { chance: 0.45, reply: 'Мне это неинтересно, спасибо.' },
      auditChief: { chance: 0.33, reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.' },
      financeDirector: { chance: 0.35, reply: 'Спасибо, но мне это не интересно.' },
      accountant: { chance: 0.3, reply: 'Не думаю, что мне это нужно. Спасибо.' },
      productionChief: { chance: 0.25, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      salesDirector: { chance: 0.22, reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем семинаре.' },
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
      salesDirector: { chance: 0.27, reply: 'Сегодня был тяжелый день. Извините, что-то я неважно себя чувствую.' },
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
      developmentVp: { chance: 0.2, reply: 'Вице-президент оп организационному развитию не смог посетить совещание.' },
      securityChief: {
        chance: 0.33,
        reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.',
      },
      auditChief: { chance: 0.4, reply: 'Вы не получили ответа на Ваше приглашение.' },
      financeDirector: { chance: 0.25, reply: 'Валентина Ивановна находится на обучении.' },
      accountant: { chance: 0.15, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      productionChief: { chance: 0.3, reply: 'Мои обстоятельства не позволяют мне присутствовать на Вашем совещании.' },
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
      legalChief: { chance: 0.3, reply: 'Александр, я не смогу присутствовать. Надеюсь для вас это не критично.' },
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
      developmentVp: { chance: 0.5, reply: 'Спасибо за приглашение, но придти не смогу, у дочери День Рождения.' },
      securityChief: {
        chance: 0.4,
        reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.',
      },
      auditChief: { chance: 0.55, reply: 'К сожалению, Елена не смогла придти.' },
      financeDirector: { chance: 0.3, reply: 'Спасибо, но это не по мне.' },
      accountant: { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      productionChief: { chance: 0.34, reply: 'Спасибо за приглашение. Но я не особый поклонник русских вечеринок.' },
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
  },
  // Период 4
  {
    brainStorm: {},
    askingGuru: {},
    externalProvidersSeminar: {},
    learningEvent: {},
    privateMeeting: {},
    teamBuildingTraining: {},
    privateParty: {},
  },
]

export const rejectChancesForGroupEvents: RejectChance[][][] = [
  // ПЕРИОД 4
  [
    // Мозговой штурм
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.38,
        reply: 'Вице-президент ответил Вам, что не видит необходимости присутствовать на мозговом штурме.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Не думаю, что мне это интересно. Спасибо.' },
      { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      { chance: 0.25, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      { chance: 0.25, reply: 'Александр, я очень занята в настоящее время.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0.3, reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    ],
    // Привлечение внешнего  консультанта ("гуру") для проведения мозгового штурма
    [
      { chance: 0.35, reply: 'Вы не смогли связаться с президентом.' },
      { chance: 0.33, reply: 'Я не планирую посещение Москвы в ближайшие две недели.' },
      { chance: 0.3, reply: 'Очень занят.' },
      { chance: 0.25, reply: 'Возникли срочные проблемы, требующие моего вмешательства…' },
      {
        chance: 0.25,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0.3, reply: 'Боюсь мне не до штурмов, надо же за всеми присматривать.' },
      {
        chance: 0.27,
        reply:
          'Александр, возможно меня это и заинтересовало бы, но к сожалению, в ближайшую неделю я буду на конференции.',
      },
      { chance: 0.24, reply: 'Извините, но мне скоро предстоит отчитываться перед руководством, мне не до штурмов.' },
      { chance: 0.25, reply: 'Очень занят... Проверки, отчеты… ну Вы понимаете.' },
      {
        chance: 0.26,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      {
        chance: 0.26,
        reply: 'Я польщена. К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      { chance: 0.4, reply: '-К сожалению, эта проблема не имеет решения. Я не приду.' },
      { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    ],
    // Проведение обучающего семинара с привлечением внешних провайдеров
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Дело полезное! Я думаю, Вы и без меня справитесь.' },
      { chance: 0.3, reply: 'Спасибо, но я уже проходил обучение по этой тематике.' },
      { chance: 0.2, reply: 'Не думаю, что есть смысл ходить на этот семинар. Спасибо.' },
      { chance: 0.29, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      { chance: 0.19, reply: 'Извините, Александр. Очень много дел навалилось.' },
      { chance: 0.2, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.15, reply: 'Интересно конечно, но боюсь, не смогу выкроить времени для посещения семинара.' },
      { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      { chance: 0.2, reply: 'Александр, сомневаюсь, что смогу найти время. Очень много дел, извините.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.8,
        reply: '-Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.48, reply: 'Александр, Ты не прав!' },
    ],
    // Проведение обучающего семинара с участием одного из  топ- менеджеров компании
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'К сожалению, у меня много дел. Извините.' },
      { chance: 0.1, reply: 'К сожалению, не смогу присутствовать.' },
      { chance: 0.15, reply: 'Это очень интересно. Но у меня сейчас такая запарка…' },
      { chance: 0.15, reply: 'Всегда интересно послушать высшее руководство, но, к сожалению, у меня много дел. ' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Совещание
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Извините, но это время у меня уже занято.' },
      { chance: 0.5, reply: 'Г-н Каменев не смогу придти.' },
      { chance: 0.2, reply: 'Если у меня появится время, я зайду к Вам.' },
      { chance: 0.26, reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…' },
      { chance: 0.4, reply: 'К сожалению, у меня назначено совещание в своем подразделении.' },
      { chance: 0.3, reply: 'Сегодня ужасный день. Извините, что-то я неважно себя чувствую.' },
      { chance: 0.17, reply: 'Александр, не смогу посетить совещание, уезжаю в командировку.' },
      { chance: 0.28, reply: 'К сожалению, на этой неделе я выступаю на конференции, мне необходимо подготовиться…' },
      {
        chance: 0.27,
        reply:
          'Сегодня какой-то тяжелый день, голова просто раскалывается, наверное давление. Боюсь, я не выдержу еще одного совещания.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.' },
      {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    ],
    // Тренинг по командообразованию
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Мне это неинтересно, спасибо.' },
      { chance: 0.29, reply: 'К сожалению, у меня много дел. Извините.' },
      {
        chance: 0.3,
        reply: 'Александр, я неважно чувствовал себя на этой неделе, видимо простудился. Думаю, мне стоит рисковать…',
      },
      {
        chance: 0.26,
        reply:
          'Спасибо, Александр. Но эту неделю я что-то неважно себя чувствую. Думаю, в таком состоянии мне лучше не скакать…',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      { chance: 0.6, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      { chance: 0, reply: '' },
      { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      { chance: 0, reply: '' },
      {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    ],
    // Частная вечеринка
    [
      { chance: 0.8, reply: 'Г-н президент находится в командировке.' },
      { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      { chance: 0.6, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.5, reply: 'Очень занят. Не смогу посетить Вас.' },
      { chance: 0.4, reply: 'Спасибо, не смогу присутствовать, уезжаю в командировку.' },
      { chance: 0.3, reply: 'Не люблю я участвовать в сборищах людей, если только понаблюдать…' },
      { chance: 0.5, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.3, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      { chance: 0.18, reply: 'Сегодня был тяжелый день. Извините, что-то я очень устал.' },
      { chance: 0.2, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      { chance: 0.32, reply: 'Спасибо за приглашение, но у меня уже есть планы на вечер.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    ],
  ],
  // ПЕРИОД 5
  [
    // Мозговой штурм
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.8, reply: 'Думаю, вы прекрасно справитесь без меня.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'На эту неделю Валентина Ивановна запланировала обучение на семинаре.' },
      {
        chance: 0.24,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0.26, reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.' },
      {
        chance: 0.15,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0.3, reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    ],
    // Привлечение внешнего  консультанта ("гуру") для проведения мозгового штурма
    [
      { chance: 0.4, reply: 'Вы так и не смогли связаться с президентом.' },
      { chance: 0.5, reply: 'Спасибо, но у меня уже назначен ряд мероприятий на ближайшие 2 недели…' },
      { chance: 0.3, reply: 'К сожалению, у меня много дел. Извините.' },
      {
        chance: 0.22,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0.25, reply: 'Г-н Карташов в командировке.' },
      { chance: 0.3, reply: 'Спасибо, но мне это неинтересно.' },
      { chance: 0.23, reply: 'К сожалению, не смогу присутствовать.' },
      { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      { chance: 0.23, reply: 'Боюсь, что не смогу Вам помочь, ввиду своей занятости.' },
      {
        chance: 0.2,
        reply:
          'Г-н Нэфф в письме к Вам извинился, что не может участвовать, т.к. в ближайшую неделю его не будет в Москве.',
      },
      {
        chance: 0.27,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    ],
    // Проведение обучающего семинара с привлечением внешних провайдеров
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Спасибо, не думаю, что мне это интересно.' },
      { chance: 0.2, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.23, reply: 'Г-н Карташов в командировке.' },
      { chance: 0.3, reply: 'У нас планируется выездное мероприятие, я должен проследить.' },
      { chance: 0.25, reply: 'К сожалению, не смогу присутствовать. Некоторые дела требуют моего присутствия.' },
      { chance: 0.26, reply: 'К сожалению, Валентина Ивановна заболела.' },
      { chance: 0.2, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.2, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.25, reply: 'Александр, я бы хотела поучаствовать, только я завтра уезжаю на завод.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Проведение обучающего семинара с участием одного из  топ- менеджеров компании
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.25, reply: 'Очень занят. Проверка, отчеты… ну Вы понимаете.' },
      { chance: 0.27, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      { chance: 0.25, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Совещание
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета.' },
      { chance: 0.5, reply: 'Извините, но на это время у нас уже назначено заседание Управляющего Совета' },
      {
        chance: 0.5,
        reply: 'Александр, не смогу посетить Вас, но на это время назначено заседание Управляющего Совета',
      },
      { chance: 0.3, reply: 'Спасибо. Не думаю, что мне это будет интересно.' },
      { chance: 0.5, reply: 'Не смогу, уже назначено другое совещание.' },
      { chance: 0.35, reply: 'Г-н Ливанов, я не смогу посетить ваше совещание. Очень занята.' },
      {
        chance: 0.2,
        reply: 'Александр, сегодня был очень тяжелый день. Боюсь я не в состоянии посетить ваше совещание.',
      },
      {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      {
        chance: 0.3,
        reply: 'Александр, я уже обещала в это время присутствовать на презентации в другом подразделении компании.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.' },
      {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    ],
    // Тренинг по командообразованию
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Не думаю, что мне это интересно…' },
      { chance: 0.2, reply: 'Спасибо, но я не смогу вырваться.' },
      { chance: 0.3, reply: 'Г-н Нэфф находится в командировке.' },
      { chance: 0.26, reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      { chance: 0.6, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      { chance: 0, reply: '' },
      { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      { chance: 0, reply: '' },
      {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    ],
    // Частная вечеринка
    [
      { chance: 0.8, reply: 'Такие мероприятия не по мне.' },
      { chance: 0.7, reply: 'В ближайшую неделю я не планировал посещение Вашей компании.' },
      { chance: 0.6, reply: 'Очень занят. Не смогу посетить Вас.' },
      { chance: 0.5, reply: 'Спасибо за приглашение. Очень занят. Не смогу посетить Вас.' },
      { chance: 0.4, reply: '-К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      { chance: 0.4, reply: 'Мне вполне хватает общения с коллегами и на работе. Вечера я хочу посвящать себе.' },
      { chance: 0.2, reply: 'Пока Вы не получили от Елены Крыловой никакого ответа.' },
      { chance: 0.4, reply: 'Спасибо, но такие мероприятия не по мне…' },
      { chance: 0.2, reply: 'Г-н Григорьев плохо почувствовал себя к вечеру.' },
      { chance: 0.3, reply: '- Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.' },
      { chance: 0.35, reply: 'Спасибо, у меня уже есть планы на вечер.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    ],
  ],
  // ПЕРИОД 6
  [
    // Мозговой штурм
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Не вижу необходимости моего присутствия, я думаю, Вы справитесь сами.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.35, reply: 'Очень занят. Извините.' },
      { chance: 0.28, reply: 'Г-н Григорьев в командировке.' },
      { chance: 0.35, reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.' },
      { chance: 0.34, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: - Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0.3, reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    ],
    // Привлечение внешнего  консультанта ("гуру") для проведения мозгового штурма
    [
      { chance: 0.5, reply: 'Очень занят. Извините.' },
      { chance: 0.5, reply: 'В ближайшую неделю я не планировал посещение России.' },
      { chance: 0.35, reply: 'Г-н Жан так и не ответил на Ваше предложение.' },
      { chance: 0.35, reply: 'Г-н Карташов в командировке.' },
      { chance: 0.3, reply: 'Очень занят. Извините.' },
      { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.35, reply: 'К сожалению, вы не получили никакого ответа.' },
      { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.18, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу участвовать.' },
      { chance: 0.3, reply: 'Г-н Нэфф не смог участвовать, т.к. возникли неотложные дела, требующие его присутствия.' },
      { chance: 0.2, reply: 'Извините, г-н Ливанов, на это время у Ирины уже назначена важная встреча.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.15,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      {
        chance: 0.25,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.05,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    ],
    // Проведение обучающего семинара с привлечением внешних провайдеров
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Очень занят. Извините.' },
      {
        chance: 0.3,
        reply: 'Г-н Каменев не смог посетить семинар, т.к. возникли неотложные дела, требующие его присутствия.',
      },
      { chance: 0.3, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.35, reply: 'Александр, сейчас я очень занят. ' },
      {
        chance: 0.3,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0.3, reply: 'Очень занят. Извините.' },
      { chance: 0.35, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      { chance: 0.36, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Проведение обучающего семинара с участием одного из  топ- менеджеров компании
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Очень занята, проверка, отчеты… ну Вы понимаете.' },
      { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      {
        chance: 0.3,
        reply: 'К сожалению, г-н Нэфф отбыл на один из заводов Компании, где сейчас проходит запуск новой установки.',
      },
      {
        chance: 0.33,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Совещание
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.8, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      { chance: 0.5, reply: 'Не вижу необходимости присутствовать на Вашем совещании.' },
      { chance: 0.2, reply: 'Не смогу прийти, думаю, Вы и без меня прекрасно справитесь.' },
      { chance: 0.35, reply: 'Г-н Михайловский в командировке.' },
      { chance: 0.34, reply: 'У меня уже назначена встреча на это время.' },
      { chance: 0.24, reply: 'Извините, но мне нужно подготовиться к выступлению, у меня впереди совещание.' },
      { chance: 0.2, reply: 'Извините, г-н Ливанов, на это время у г-на Григорьева уже назначена важная встреча.' },
      { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.3, reply: 'Очень занята. Извините.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.' },
      {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    ],
    // Тренинг по командообразованию
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.35, reply: 'Александр, к сожалению, не смогу уделить Вам время.' },
      {
        chance: 0.32,
        reply:
          'Спасибо за приглашение. Но, к сожалению, важные дела требуют моего присутствия. Боюсь, не смогу вырваться.',
      },
      { chance: 0.4, reply: 'Очень занят. Извините.' },
      { chance: 0.45, reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      { chance: 0.6, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      { chance: 0, reply: '' },
      { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      { chance: 0, reply: '' },
      {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    ],
    // Частная вечеринка
    [
      { chance: 0.9, reply: 'Вы не получили ответа на свое приглашение.' },
      { chance: 1.0, reply: 'В ближайшую неделю я не планировал посещение России.' },
      { chance: 0.45, reply: 'У меня уже запланировано это время. Извините.' },
      { chance: 0.45, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      { chance: 0.26, reply: 'Как-то я не настроен на вечеринку. Спасибо за приглашение.' },
      { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      { chance: 0.45, reply: 'У меня были другие планы на этот вечер. Спасибо за приглашение.' },
      { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.4, reply: '- Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.' },
      { chance: 0.3, reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.4,
        reply: '- Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств."',
      },
      { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      {
        chance: 0.2,
        reply: 'Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти.',
      },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    ],
  ],
  // ПЕРИОД 7
  [
    // Мозговой штурм
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.65, reply: 'Не вижу смысла в этом.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.33, reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.' },
      { chance: 0.25, reply: 'Не вижу смысла в этом.' },
      { chance: 0.22, reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.' },
      {
        chance: 0.2,
        reply:
          'Ирина в письме к Вам извинилась, что не может пока Вам ничем помочь, т.к. в ближайшую неделю ее не будет в Москве.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Заместитель по закупкам, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Вам пришло письмо от зам. HR директора: Г-н Уваров находится в командировке. Присутствовать на Вашем мероприятии не сможет.',
      },
      { chance: 0.2, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Спасибо за приглашение,  но я не смогу присутствовать на вашем мероприятии.' },
      { chance: 0.3, reply: 'У нас проблемы с почтовым сервером! Мне срочно надо разруливать ситуацию! Извините. ' },
      { chance: 0, reply: '' },
      { chance: 0.2, reply: 'У меня запарка, давайте в следующий раз.' },
      {
        chance: 0.3,
        reply:
          'Ваш заместитель, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, в силу личных обстоятельств не сможет в этот раз принять участия в мозговом штурме.',
      },
    ],
    // Привлечение внешнего  консультанта ("гуру") для проведения мозгового штурма
    [
      { chance: 0.5, reply: 'Не вижу смысла…' },
      { chance: 0.7, reply: 'Г-н Ливанов, мое время стоит денег.' },
      { chance: 0.4, reply: 'У меня уже назначена встреча на это время.' },
      { chance: 0.4, reply: 'К сожалению, не смогу уделить Вам время, т.к. завтра уезжаю на обучение.' },
      { chance: 0.4, reply: 'Очень занят. Извините.' },
      { chance: 0.3, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.4, reply: 'Очень занят. Извините.' },
      { chance: 0.3, reply: 'Не вижу смысла в этом.' },
      { chance: 0.28, reply: 'Извините, у меня запарка…' },
      { chance: 0.2, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.28, reply: 'Ирина находится в командировке.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.3,
        reply: 'Заместитель по закупкам, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      { chance: 0.4, reply: 'К сожалению, эта проблема не имеет решения. Я не приду.' },
      { chance: 0.3, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.2, reply: 'Мои обстоятельства не позволяют мне Присутствовать на вашем совещании.' },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Благодарю за проявленное доверие, но, к сожалению, по объективным причинам мне не удастся принять ваше приглашение.',
      },
      {
        chance: 0.5,
        reply: 'Ваш заместитель, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.2,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в командировке и не смог принять участия в мозговом штурме.',
      },
    ],
    // Проведение обучающего семинара с привлечением внешних провайдеров
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.55, reply: 'Не смогу быть. Спасибо за приглашение.' },
      { chance: 0.34, reply: 'Не вижу смысла в этом.' },
      { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      { chance: 0.26, reply: 'Спасибо, не вижу необходимости.' },
      { chance: 0.6, reply: 'Не вижу смысла в этом.' },
      { chance: 0.4, reply: 'Не вижу смысла в этом.' },
      { chance: 0.25, reply: 'Г-н Григорьев находится в командировке.' },
      { chance: 0.31, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      { chance: 0.35, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.8,
        reply: 'Не могу разделить Ваше мнения о целесообразности моего участия в данном мероприятии с настоящее время.',
      },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Проведение обучающего семинара с участием одного из  топ- менеджеров компании
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.34, reply: 'Извините, у меня запарка…' },
      { chance: 0.27, reply: 'Возникли срочные проблемы, требующие моего вмешательства. Не смогу придти.' },
      { chance: 0.37, reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.' },
      { chance: 0.3, reply: 'Боюсь, что не смогу присутствовать, ввиду своей занятости.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
    ],
    // Совещание
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.54, reply: 'У меня уже назначена встреча на это время.' },
      { chance: 0.45, reply: 'Г-н Каменев написал Вам, что не видит необходимости своего присутствия на совещании.' },
      { chance: 0.35, reply: 'Очень занят. Извините.' },
      { chance: 0.35, reply: 'Спасибо, мне это не интересно.' },
      { chance: 0.38, reply: 'У меня уже назначена встреча на это время.' },
      { chance: 0.23, reply: 'Прошу прощения, мне надо отследить подготовку к плановой проверке.' },
      { chance: 0.21, reply: 'Очень занят. Извините.' },
      { chance: 0.31, reply: 'Извините, г-н Ливанов, на это время у г-на Нэффа уже назначена важная встреча.' },
      { chance: 0.33, reply: 'Извините, у меня запарка…' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.35,
        reply:
          'Заместитель по закупкам, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      { chance: 0.4, reply: 'Извините, я сейчас занят. Давайте в другой раз.' },
      { chance: 0.4, reply: 'На сегодняшний день, это не представляется возможным.' },
      { chance: 0, reply: '' },
      { chance: 0.5, reply: 'Меня срочно вызывают к начальству. Давайте в другой раз.' },
      { chance: 0.4, reply: 'Извините, я не смогу Присутствовать.' },
      { chance: 0, reply: '' },
      { chance: 0.3, reply: 'Александр, я не смогу Присутствовать. Надеюсь для вас это не критично.' },
      {
        chance: 0.1,
        reply:
          'Ваш заместитель, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.25,
        reply:
          'Начальник группы внедрения изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы анализа и разработки изменений, к сожалению, был в этот день болен и не вышел на работу, поэтому не участвовал в  совещании.',
      },
    ],
    // Тренинг по командообразованию
    [
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0.34, reply: 'Что-то я не очень хорошо себя чувствовала всю неделю… думаю мне не стоит рисковать…' },
      { chance: 0.25, reply: 'Спасибо, но я не смогу вырваться.' },
      { chance: 0.3, reply: 'Александр, к сожалению, не смогу выкроить время.' },
      { chance: 0.4, reply: 'Очень занята. Извините.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.45,
        reply:
          'Заместитель по закупкам сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      { chance: 0.6, reply: 'Хотелось бы порадовать Вас, но ситуация такова, что я не смогу Присутствовать.' },
      { chance: 0.7, reply: 'Александр, это предложение мне представляется проблематичным. ' },
      { chance: 0, reply: '' },
      { chance: 0.4, reply: 'Александр, я в этом месяце уже была на тренинге. Спасибо.' },
      { chance: 0.2, reply: 'Виктор вежливо отказался, прислав от вам письмо.' },
      { chance: 0, reply: '' },
      {
        chance: 0.5,
        reply: 'Александр, я думаю мне это не нужно, да и работы сейчас полно. Может как-нибудь в следующий раз.',
      },
      {
        chance: 0.3,
        reply: 'Ваш заместитель сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.3,
        reply:
          'Начальник группы информационной поддержки сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы внедрения изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на сильную загруженность и не смог посетить организованный Вами тренинг.',
      },
    ],
    // Частная вечеринка
    [
      { chance: 1.0, reply: 'Я не поклонник таких мероприятий. Желаю Вам хорошо отметить Ваш успех.' },
      { chance: 1.0, reply: 'Спасибо, но меня не будет в России в этот период.' },
      { chance: 0.8, reply: 'Не смогу быть. Спасибо за приглашение.' },
      { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошо повеселиться.' },
      { chance: 0.3, reply: 'К сожалению, я не важно себя чувствую.' },
      { chance: 0.4, reply: 'Спасибо, но это не по мне…' },
      { chance: 0.7, reply: 'К сожалению, не смогу придти. Желаю Вам хорошего вечера.' },
      { chance: 0.4, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.2, reply: 'Спасибо, но у меня уже были планы на вечер.' },
      { chance: 0.4, reply: '- Спасибо, Александр. Но я небольшой поклонник "русских" вечеринок.' },
      { chance: 0.3, reply: 'Ирина плохо почувствовал себя к вечеру и не смогла посетить вашу вечеринку.' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      { chance: 0, reply: '' },
      {
        chance: 0.2,
        reply:
          'Заместитель по закупкам сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.4,
        reply: 'Я ценю ваше доброе отношение, но вынужден отказать в силу не предвиденный обстоятельств.',
      },
      { chance: 0.5, reply: 'Боюсь, что это невозможно…' },
      { chance: 0, reply: '' },
      { chance: 0.6, reply: 'Вам пришло письмо от Татьяны с отказом без объяснения причин.' },
      {
        chance: 0.2,
        reply: '- "Александр, мне жаль пропускать Вашу вечернику, но я по семейным обстоятельствам не смогу прийти."',
      },
      { chance: 0, reply: '' },
      {
        chance: 0.4,
        reply:
          'Александр, спасибо за приглашение, но я не смогу прийти. Я хочу провести вечер с детьми. Я и так очень много времени бываю на работе…',
      },
      {
        chance: 0.2,
        reply:
          'Ваш заместитель сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.15,
        reply:
          'Начальник группы информационной поддержки сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы внедрения изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
      {
        chance: 0.1,
        reply:
          'Начальник группы анализа и разработки изменений сослался на личные обстоятельства и не смог появиться на организованной Вами вечеринке.',
      },
    ],
  ],
]
