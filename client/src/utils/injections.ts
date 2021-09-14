import { InjectionKey } from 'vue'
import { RequestMaker } from '../services/RequestMaker'

export const RequestMakerKey: InjectionKey<RequestMaker> = Symbol('$requestMaker')
