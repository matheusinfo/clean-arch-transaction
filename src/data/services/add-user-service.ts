import { AddUserContract } from '@/domain/contracts'
import { AddUserRepository } from '@/data/protocols/repository'

export class AddUserService implements AddUserContract {
  constructor (
    private readonly addUserRepository: AddUserRepository
  ){}

  async add (params: AddUserContract.Params): Promise<AddUserContract.Result> {
    const account = await this.addUserRepository.add(params)
    return account
  }
}
