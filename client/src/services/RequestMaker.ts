import { AdminInputDto, AdminOutputDto } from '../types/AuthDtos'

export class RequestMaker {
  readonly #apiBaseUri: string
  #token = ''

  constructor(apiBaseUri: string) {
    this.#apiBaseUri = apiBaseUri
    console.log(apiBaseUri)
  }

  public async authAdmin(login: string, password: string): Promise<Omit<AdminOutputDto, 'token'>> {
    const result = await this.post<AdminInputDto, AdminOutputDto>(
      'auth/admin',
      {
        login,
        password,
      },
      false
    )

    this.#token = result.token

    return {
      login: result.login,
      name: result.name,
    }
  }

  private async post<Input, Output>(endpoint: string, body: Input, addHeaders = true): Promise<Output> {
    const requestParams: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body),
    }

    if (addHeaders) {
      requestParams.headers = this.prepareHeaders()
    }

    const response = await fetch(`${this.#apiBaseUri}/${endpoint}`, requestParams)
    await RequestMaker.checkResponseForErrors(response)
    return await RequestMaker.parseResponse(response)
  }

  private prepareHeaders(): Headers {
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${this.#token}`)
    headers.append('Content-Type', 'application/json')
    return headers
  }

  private static async checkResponseForErrors(response: Response): Promise<Response> {
    if (response.ok) {
      return response
    } else {
      throw {
        status: response.status,
        statusText: response.statusText,
        message: await response.text(),
      }
    }
  }

  private static async parseResponse<T>(response: Response): Promise<T> {
    const responseTypeHeader = response.headers.get('content-type')
    if (responseTypeHeader?.includes('json')) {
      return await response.json()
    }
    return (await response.text()) as unknown as T
  }
}
