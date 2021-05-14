/* eslint-disable consistent-return */
import { CacheProvider } from '@/infra/protocols';

class CacheProviderRedisSpy implements CacheProvider {
  private client = {};

  async save(key: string, value: any): Promise<void> {
    this.client[key] = JSON.stringify(value);
  }

  async invalidate(key: string): Promise<void> {
    delete this.client[key];
  }

  async recover<T>(key: string): Promise<T> {
    const data = this.client[key];

    if(!data) return;

    const elem = JSON.parse(data) as T;
    return elem;
  }
}

export const makeCacheProviderRedisSpy = (): CacheProvider => new CacheProviderRedisSpy();
