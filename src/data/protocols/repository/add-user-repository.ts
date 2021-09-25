import { AddUserContract } from '@/domain/contracts'

export interface AddUserRepository {
  add: (params: AddUserRepository.Params) => Promise<AddUserRepository.Result>
}

export namespace AddUserRepository {
  export type Params = AddUserContract.Params
  export type Result = AddUserContract.Result
}
