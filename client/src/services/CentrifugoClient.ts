import Centrifuge from 'centrifuge'

export class CentrifugoClient {
  #centrifugo: Centrifuge

  constructor(url: string) {
    this.#centrifugo = new Centrifuge(url)
  }

  registerEvents(): void {
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

  connect(token: string): void {
    this.#centrifugo.setToken(token)
    this.registerEvents()
    this.#centrifugo.connect()
  }
}
