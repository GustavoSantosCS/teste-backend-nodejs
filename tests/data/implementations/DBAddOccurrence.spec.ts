import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService, OccurrenceRepository } from '@/infra/protocols';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';
import { makeGeolocationServiceSpy } from '@tests/infra/geolocation/mocks';
import { makeOccurrenceRepositorySpy } from '@tests/infra/db/mongodb/mocks';
import { DBAddOccurrence } from '@/data/implementations';
import { left } from '@/shared';
import { AddressNotFundError } from '@/presentation/errors/AddressNotFundError';

type MakeSutType = {
  sut: DBAddOccurrence
  geolocationServiceSpy: GeolocationService
  occurrenceRepositorySpy: OccurrenceRepository
}

const makeSut = (): MakeSutType => {
  const geolocationServiceSpy = makeGeolocationServiceSpy();
  const occurrenceRepositorySpy = makeOccurrenceRepositorySpy();
  const sut = new DBAddOccurrence(geolocationServiceSpy, occurrenceRepositorySpy);
  return { sut, geolocationServiceSpy, occurrenceRepositorySpy };
}

const makeSutDTO = (): AddOccurrenceUseCase.DTO => {
  const { denuncia, denunciante, latitude, longitude } = makeOccurrenceMock();

  return {
    denuncia, denunciante, latitude, longitude,
  }
}


describe('Unit Test: DBAddOccurrence', () => {
  it('should call the GeolocationService service with the correct values', async () => {
    const { sut, geolocationServiceSpy } = makeSut();
    const spy = jest.spyOn(geolocationServiceSpy, 'getLocation');
    const addOccurrenceFake = makeSutDTO();

    await sut.add(addOccurrenceFake);

    expect(spy).toBeCalledWith({
      latitude: addOccurrenceFake.latitude,
      longitude: addOccurrenceFake.longitude,
    });
  });

  it('should return AddressError if GeolocationService not fund', async () => {
    const { sut, geolocationServiceSpy } = makeSut();
    const error = new AddressNotFundError();
    jest.spyOn(geolocationServiceSpy, 'getLocation')
      .mockImplementationOnce(async () => left(error))
    const addOccurrenceFake = makeSutDTO();

    const response = await sut.add(addOccurrenceFake);

    expect(response.isLeft()).toBe(true);
    expect(response.value).toBe(error);
  });

  it('should call OccurrenceRepository whit correct values', async () => {
    const { sut, occurrenceRepositorySpy } = makeSut();
    const spy = jest.spyOn(occurrenceRepositorySpy, 'add');
    const addOccurrenceFake = makeSutDTO();
    const occurrenceFake = makeOccurrenceMock();
    delete occurrenceFake.id;

    await sut.add(addOccurrenceFake);

    expect(spy).toBeCalledWith(occurrenceFake);
  });

})
