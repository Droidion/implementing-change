import { AdminInputDto, AdminOutputDto, UserInputDto, UserOutputDto } from '../types/AuthDtos'
import ky, { HTTPError } from 'ky'
import { Options } from 'ky/distribution/types/options'

/**
 * Запросы к бэкэнду.
 */
export class RequestMaker {
  /** Адрес бэкэнда. */
  readonly #apiBaseUri: string
  /** Токен авторизации. */
  #token = ''

  constructor(apiBaseUri: string) {
    this.#apiBaseUri = apiBaseUri
  }

  /**
   * Авторизует админа.
   * @param login Логин админа.
   * @param password Пароль админа.
   * @return Метадата авторизованного админа.
   */
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

  /**
   * Авторизует игрока.
   * @param pin Пароль игрока, упрощенный в виде пин-кода.
   * @return Метадата авторизованного пользователя.
   */
  public async authUser(pin: string): Promise<Omit<UserOutputDto, 'token'>> {
    const result = await this.post<UserInputDto, UserOutputDto>('auth/player', { pin }, false)
    this.#token = result.token

    return {
      team: result.team,
    }
  }

  /**
   * Отправляет POST запрос.
   * @param endpoint Адрес эндпоинта.
   * @param body Тело запроса.
   * @param addToken Нужно ли добавить токен.
   * @returns Распознанный JSON тела ответа.
   * @private
   */
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
