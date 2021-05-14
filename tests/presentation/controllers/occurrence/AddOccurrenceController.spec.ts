import { AddOccurrenceController } from '@/presentation/controllers/occurrence';
import { HttpRequest } from '@/presentation/protocols';
import { makeHttpRequestMock } from './mock/HttpRequestMock';

type MakeSutType = {
  sut: AddOccurrenceController;
};

const makeSut = (): MakeSutType => ({
  sut: new AddOccurrenceController(),
});

describe('Unit Test: AddOccurrenceController', () => {
  it('should return 400 and InvalidRequestError if titulo is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.titulo;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });
});
