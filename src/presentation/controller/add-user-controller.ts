import { AddUserContract } from '@/domain/contracts'
import { serverError, success } from '@/presentation/helpers/http'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddUsersController implements Controller {
  constructor(
    private readonly addUser: AddUserContract
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { firstUser, secondUser } = request.body
      const createFirstUser = await this.addUser.add({
        name: firstUser.name,
        email: firstUser.email,
        password: firstUser.password
      })
      const createSecondUser = await this.addUser.add({
        name: secondUser.name,
        email: secondUser.email,
        password: secondUser.password
      })
      return success({
        firstUser: createFirstUser,
        secondUser: createSecondUser
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
