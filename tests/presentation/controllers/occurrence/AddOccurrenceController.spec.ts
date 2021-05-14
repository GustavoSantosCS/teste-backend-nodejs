import { AddOccurrenceUseCase } from '@/domain/usecases/AddOccurrenceUseCase';
import { AddOccurrenceController } from '@/presentation/controllers/occurrence';
import { badRequest, ok, serverError } from '@/utils/http';
import { makeDBAddOccurrenceSpy } from '@tests/data/implementations/mock/DBAddOccurrenceSpy';
import { makeOccurrenceMock } from '@tests/domain/models/mock';
import { makeHttpRequestMock } from './mock/HttpRequestMock';

type MakeSutType = {
  sut: AddOccurrenceController;
  addOccurrenceUseCaseSpy: AddOccurrenceUseCase;
};

const makeSut = (): MakeSutType => {
  const addOccurrenceUseCaseSpy = makeDBAddOccurrenceSpy();
  const sut = new AddOccurrenceController(addOccurrenceUseCaseSpy);

  return {
    sut,
    addOccurrenceUseCaseSpy,
  };
};

const makeRequesInvalid = () => badRequest({
  code: '01',
  message: 'Request inválido.',
})

describe('Unit Test: AddOccurrenceController', () => {
  it('should return 400 and InvalidRequestError if latitude is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.latitude;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if longitude is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.longitude;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denunciante is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denunciante;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denunciante.nome is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denunciante.nome;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denunciante.cpf is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denunciante.cpf;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denuncia is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denuncia;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denuncia.titulo is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denuncia.titulo;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should return 400 and InvalidRequestError if denuncia.descricao is not provider', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequestMock();
    delete httpRequest.body.denuncia.descricao;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse).toEqual(makeRequesInvalid());
  });

  it('should call the AddOccurrenceUseCase with correct values', async () => {
    const { sut, addOccurrenceUseCaseSpy } = makeSut();
    const httpRequest = makeHttpRequestMock();
    const spy = jest.spyOn(addOccurrenceUseCaseSpy, 'add');

    await sut.handle(httpRequest);
    expect(spy).toBeCalledWith(httpRequest.body);
  });

  it('should return 500 the InternalServerErro if AddOccurrenceUseCase throws', async () => {
    const { sut, addOccurrenceUseCaseSpy } = makeSut();
    jest.spyOn(addOccurrenceUseCaseSpy, 'add').mockImplementationOnce(() => { throw new Error() })

    const httpResponse = await sut.handle(makeHttpRequestMock());

    expect(httpResponse).toEqual(serverError());
  });

  it('should return 200 if all success', async () => {
    const { sut } = makeSut();

    const httpResponse = await sut.handle(makeHttpRequestMock());

    expect(httpResponse).toEqual(ok(makeOccurrenceMock()));
  });
});
