export interface CacheProvider {
  save(key: string, value: any): Promise<void>;
  invalidate(key: string): Promise<void>;
  recover<T>(key: string): Promise<T>;
}
