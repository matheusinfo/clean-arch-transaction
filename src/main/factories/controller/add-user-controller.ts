import { AddUserService } from '@/data/services'
import { Controller } from '@/presentation/protocols'
import { AddUsersController } from '@/presentation/controller'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { makePgTransactionDecorator } from '@/main/factories/decorator'

export const makeAddUsersController = (): Controller => {
  const addUserRepository = new PostgresUserRepository()
  const addUserService = new AddUserService(addUserRepository)
  const addUsersController = new AddUsersController(addUserService)
  return makePgTransactionDecorator(addUsersController)
}
