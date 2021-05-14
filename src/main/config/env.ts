import { resolve } from 'path'

require('dotenv').config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export const app = {
  port: process.env.APP_PORT || 3000,
};

export const db = {
  database: process.env.DB_DATABASE || 'teste-backend-nodejs',
  username: process.env.DB_USERNAME || undefined,
  host: process.env.DB_HOST || 'localhost',
  // eslint-disable-next-line radix
  port: parseInt(process.env.DB_PORT) || 27017,
  password: process.env.DB_PASSWORD || undefined,
};


export const mapQuestApi = {
  key: process.env.MapQuestApi_KEY || '',
}
