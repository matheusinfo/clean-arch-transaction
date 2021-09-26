import 'module-alias/register'
import { PostgresConnection } from '@/infra/db/postgres/helpers'
import app from './config/app'
import env from './config/env'

PostgresConnection.getInstance().connect({
  type: 'postgres',
  host: env.databases.postgres.host,
  database: env.databases.postgres.database,
  username: env.databases.postgres.user,
  password: env.databases.postgres.password,
  port: +env.databases.postgres.port,
  synchronize: false,
  migrations: ['src/infra/db/postgres/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/infra/db/postgres/migrations',
  },
  entities: ['src/infra/db/postgres/entities/*-entity{.ts,.js}']
}).then(async () => {
  app.listen(env.port, () => console.log(`Server running at: http://localhost:${env.port}/api`))
})
.catch(error => {
  console.log(`Database connection problem: ${error}`)
})
