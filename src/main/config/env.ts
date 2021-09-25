import * as dotenv from 'dotenv'

dotenv.config({
  path: '.env'
})

export default {
  port: process.env.PORT,
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DATABASE,
    },
  },
}
