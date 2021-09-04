export interface AdminInputDto {
  login: string
  password: string
}

export interface AdminOutputDto {
  login: string
  name: string
  token: string
}
