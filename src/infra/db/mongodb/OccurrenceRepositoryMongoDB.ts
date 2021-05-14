import { OccurrenceRepository } from '@/infra/protocols';
import { right } from '@/shared';
import { MongoHelper } from './helpers/MongoDBHelper';

export class OccurrenceRepositoryMongoDB implements OccurrenceRepository {
  async add(data: OccurrenceRepository.DTO): Promise<OccurrenceRepository.Response> {
    const occurrenceCollection = await MongoHelper.getCollection('occurrence');
    const result = await occurrenceCollection.insertOne(data);
    const {_id, ...obs} = result.ops[0];
    return right({id: _id, ...obs});
  }

}
