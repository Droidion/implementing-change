import { InjectionKey } from 'vue'
import { RequestMaker } from '../services/RequestMaker'
import { CentrifugoClient } from '../services/CentrifugoClient'

export const RequestMakerKey: InjectionKey<RequestMaker> = Symbol('$requestMaker')
export const CentrifugoClientKey: InjectionKey<CentrifugoClient> = Symbol('$centrifugoClient')
