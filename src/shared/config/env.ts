import { resolve } from 'path'

require('dotenv').config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export const mapQuestApi = {
  key: process.env.MapQuestApi_KEY || '',
}
