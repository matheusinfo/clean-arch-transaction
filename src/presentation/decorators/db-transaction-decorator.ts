import { Controller, DbTransaction, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class DbTransactionDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly db: DbTransaction
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    await this.db.openTransaction()
    try {
      const httpResponse = await this.controller.handle(request)
      await this.db.commitTransaction()
      return httpResponse
    } catch (error) {
      await this.db.rollbackTransaction()
      throw error
    } finally {
      await this.db.closeTransaction()
    }
  }
}
