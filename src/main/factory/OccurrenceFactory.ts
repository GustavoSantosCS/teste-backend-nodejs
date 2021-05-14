import { AddOccurrenceController } from '@/presentation/controllers/occurrence';
import { DBAddOccurrence } from '@/data/implementations';
import { OccurrenceRepositoryMongoDB } from '@/infra/db/mongodb';

import { MapQuestService } from '@/infra/geolocation';
import { Controller } from '@/presentation/protocols';

const makeOccurrenceRepository = () =>  new OccurrenceRepositoryMongoDB();

export const makeAddController = (): Controller => {
  const usecases = new DBAddOccurrence(new MapQuestService(), makeOccurrenceRepository());
  const controller = new AddOccurrenceController(usecases);
  return controller;
};
