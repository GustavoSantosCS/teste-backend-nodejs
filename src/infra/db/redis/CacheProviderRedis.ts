/* eslint-disable consistent-return */
import { CacheProvider } from '@/infra/protocols/CacheProvider';
import Redis, { Redis as RedisClient} from 'ioredis';
import * as env from '@/main/config/env';

export class CacheProviderRedis implements CacheProvider {
  private client: RedisClient;

  constructor(){
    this.client = new Redis(env.redis)
  }

  async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  async recover<T>(key: string): Promise<T> {
    const data = await this.client.get(key);

    if(!data) return;

    const elem = JSON.parse(data) as T;
    return elem;
  }

}
