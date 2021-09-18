import { AdminInputDto, AdminOutputDto, UserInputDto, UserOutputDto } from '../types/AuthDtos'
import ky, { HTTPError } from 'ky'
import { Options } from 'ky/distribution/types/options'

export class RequestMaker {
  readonly #apiBaseUri: string
  #token = ''

  constructor(apiBaseUri: string) {
    this.#apiBaseUri = apiBaseUri
    console.log(apiBaseUri)
  }

  public async authAdmin(login: string, password: string): Promise<Omit<AdminOutputDto, 'accessToken'>> {
    const result = await this.post<AdminInputDto, AdminOutputDto>(
      'auth/admin',
      {
        login,
        password,
      },
      false
    )

    this.#token = result.accessToken

    return {
      login: result.login,
      name: result.name,
      centrifugoToken: result.centrifugoToken,
    }
  }

  public async authUser(pin: string): Promise<Omit<UserOutputDto, 'token'>> {
    const result = await this.post<UserInputDto, UserOutputDto>('auth/player', { pin }, false)
    this.#token = result.token

    return {
      team: result.team,
    }
  }

  private async post<Input, Output>(endpoint: string, body: Input, addToken = true): Promise<Output> {
    const options: Options = { json: body }
    if (addToken) {
      options.headers = { Authorization: `Bearer ${this.#token}` }
    }

    try {
      return await ky.post(this.#apiBaseUri + endpoint, options).json<Output>()
    } catch (error: unknown) {
      throw await (error as HTTPError).response.text()
    }
  }
}
