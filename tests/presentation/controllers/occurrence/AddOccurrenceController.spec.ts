import { AddOccurrenceController } from '@/presentation/controllers/occurrence';
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

  it('should return 400 and InvalidRequestError if descricao is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.descricao;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });

  it('should return 400 and InvalidRequestError if latitude is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.latitude;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });

  it('should return 400 and InvalidRequestError if longitude is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.longitude;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });

  it('should return 400 and InvalidRequestError if denunciante is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denunciante;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });

  it('should return 400 and InvalidRequestError if denunciante.name is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denunciante.name;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });

  it('should return 400 and InvalidRequestError if denuncia is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denuncia;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);

    expect(httpResponse.body).toEqual({
      code: '01',
      message: 'Request inválido.',
    });
  });
});
