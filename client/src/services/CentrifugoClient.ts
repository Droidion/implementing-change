import Centrifuge from 'centrifuge'

/**
 * Клиент Centrifugo для обмена сообщениями в реальном времени с сервером.
 */
export class CentrifugoClient {
  #centrifugo: Centrifuge

  constructor(url: string) {
    this.#centrifugo = new Centrifuge(url)
  }

  /**
   * Устанавливает соединение с сервером Centrifugo.
   * @param token Токен Centrifugo.
   */
  connect(token: string): void {
    this.#centrifugo.setToken(token)
    this.registerEvents()
    this.#centrifugo.connect()
  }

  /**
   * Регистрирует входные и выходные события для общения с Centrifugo.
   * @private
   */
  private registerEvents(): void {
    this.#centrifugo.on('connect', function (ctx) {
      console.log('connected', ctx)
    })

    this.#centrifugo.on('disconnect', function (ctx) {
      console.log('disconnected', ctx)
    })

    this.#centrifugo.subscribe('channel', function (ctx) {
      console.log('got message: ', ctx.data.value)
    })
  }
}
