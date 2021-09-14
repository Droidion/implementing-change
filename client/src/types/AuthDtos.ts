export interface AdminInputDto {
  login: string
  password: string
}

export interface AdminOutputDto {
  login: string
  name: string
  token: string
}

export interface UserInputDto {
  pin: string
}

export interface UserOutputDto {
  team: number
  token: string
}
