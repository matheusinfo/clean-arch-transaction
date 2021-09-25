import { AddUserService } from '@/data/services'
import { Controller } from '@/presentation/protocols'
import { AddUsersController } from '@/presentation/controller'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { makeDbTransactionDecorator } from '@/main/factories/decorator'

export const makeAddUsersController = (): Controller => {
  const addUserRepository = new PostgresUserRepository()
  const addUserService = new AddUserService(addUserRepository)
  const addUsersController = new AddUsersController(addUserService)
  return makeDbTransactionDecorator(addUsersController)
}
