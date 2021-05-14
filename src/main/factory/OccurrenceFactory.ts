import { AddOccurrenceController } from '@/presentation/controllers/occurrence';
import { DBAddOccurrence } from '@/data/implementations';
import { OccurrenceRepositoryMongoDB } from '@/infra/db/mongodb';

import { MapQuestService } from '@/infra/geolocation';
import { Controller } from '@/presentation/protocols';
import { CacheProviderRedis } from '@/infra/db/redis';

const makeOccurrenceRepository = () =>  new OccurrenceRepositoryMongoDB();
const makeCacheProvider = () => new CacheProviderRedis();
export const makeAddController = (): Controller => {
  const usecases = new DBAddOccurrence(
    new MapQuestService(),
    makeOccurrenceRepository(),
    makeCacheProvider()
  );
  const controller = new AddOccurrenceController(usecases);
  return controller;
};
