import { Controller } from '@/presentation/protocols'
import { DbTransactionDecorator } from '@/presentation/decorators'
import { makePostgresConnection } from '@/main/factories/helpers'

export const makePgTransactionDecorator = (controller: Controller): DbTransactionDecorator => {
  return new DbTransactionDecorator(controller, makePostgresConnection())
}
