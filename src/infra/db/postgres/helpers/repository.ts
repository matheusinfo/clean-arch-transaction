import { ObjectType, Repository } from 'typeorm'
import { PostgresConnection } from '@/infra/db/postgres/helpers'

export abstract class PostgresRepository {
  private readonly connection: PostgresConnection = PostgresConnection.getInstance()

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}
