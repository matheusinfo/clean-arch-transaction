import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddUsersController } from '@/main/factories/controller'

export default (router: Router): void => {
  router.post('/user/create', adaptRoute(makeAddUsersController()))
}
