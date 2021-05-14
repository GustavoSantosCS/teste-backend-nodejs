import { resolve } from 'path'
import { RedisOptions } from 'ioredis';

require('dotenv').config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export const mongo = {
  url: process.env.MONGO_URL_PRODUCTION,
};

export const redis: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
} ;

export const mapQuestApi = {
  key: process.env.MAP_QUEST_API_KEY,
}
