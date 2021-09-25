import {
  createConnection,
  getConnection,
  getConnectionManager,
  ObjectType,
  QueryRunner,
  Repository,
  Connection,
  getRepository as get
} from 'typeorm'
import { DbTransaction } from '@/presentation/protocols'

export class PostgresConnection implements DbTransaction {
  private static instance?: PostgresConnection
  private query?: QueryRunner
  private connection?: Connection

  static getInstance (): PostgresConnection {
    if (PostgresConnection.instance === undefined){
      PostgresConnection.instance = new PostgresConnection()
    }
    return PostgresConnection.instance
  }

  async connect (connection: any): Promise<void> {
    this.connection = getConnectionManager().has('postgres-default')
      ? getConnection()
      : await createConnection(connection)
  }

  async openTransaction (): Promise<void> {
    this.query = this.connection.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    await this.query.release()
  }

  async commitTransaction (): Promise<void> {
    await this.query.commitTransaction()
  }

  async rollbackTransaction (): Promise<void> {
    await this.query.rollbackTransaction()
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.query !== undefined){
      return this.query.manager.getRepository(entity)
    }
    return get(entity)
  }
}
