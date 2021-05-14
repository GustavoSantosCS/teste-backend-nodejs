import { Occurrence } from '@/domain/models';
import { OccurrenceRepositoryMongoDB, MongoHelper } from '@/infra/db/mongodb';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';

describe('Test Integration', () =>{
  beforeAll(async () =>{
    await MongoHelper.connect(process.env.MONGO_URL);
  })

  afterAll(async () =>{
    await MongoHelper.disconnect();
  })

  it('should return Occurrence if success', async () => {
    const sut = new OccurrenceRepositoryMongoDB()
    const occurrence = makeOccurrenceMock();
    delete occurrence.id;

    const response = await sut.add(occurrence);

    expect(response.isRight()).toBe(true);

    const persistOccurrence = response.value as Occurrence;

    expect(persistOccurrence.id).toBeTruthy();
    expect(persistOccurrence.denuncia).toEqual(occurrence.denuncia);
    expect(persistOccurrence.denunciante).toEqual(occurrence.denunciante);
    expect(persistOccurrence.endereco).toEqual(occurrence.endereco);
    expect(persistOccurrence.latitude).toEqual(occurrence.latitude);
    expect(persistOccurrence.longitude).toEqual(occurrence.longitude);
  });
});
