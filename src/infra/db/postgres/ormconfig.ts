import env from '../../../main/config/env'

export = {
    name: 'postgres-default',
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
}