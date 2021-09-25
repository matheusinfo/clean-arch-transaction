import { AddUserRepository } from '@/data/protocols/repository'
import { UserEntity } from '@/infra/db/postgres/entities'
import { PostgresRepository } from '@/infra/db/postgres/helpers'

export class PostgresUserRepository
  extends PostgresRepository
  implements AddUserRepository {
  async add(params: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    const repository = this.getRepository(UserEntity)
    const account = await repository.save({
      name: params.name,
      email: params.email,
      password: params.password
    })
    return account && {
      id: account.id,
      name: account.name,
      email: account.email
    }
  }
}
