import { resolve } from 'path'

require('dotenv').config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export const mongo = {
  url: process.env.MONGO_URL_PRODUCTION,
};


export const mapQuestApi = {
  key: process.env.MAP_QUEST_API_KEY,
}
