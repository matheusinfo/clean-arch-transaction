import { PostgresConnection } from '@/infra/db/postgres/helpers'

export const makePostgresConnection = (): PostgresConnection => {
  return PostgresConnection.getInstance()
}
