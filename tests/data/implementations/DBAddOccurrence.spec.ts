import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService } from '@/infra/protocols';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';
import { makeGeolocationServiceSpy } from '@tests/infra/geolocation/mocks';
import { DBAddOccurrence } from '@/data/implementations';

type MakeSutType = {
  sut: DBAddOccurrence
  geolocationServiceSpy: GeolocationService
}

const makeSut = (): MakeSutType => {
  const geolocationServiceSpy = makeGeolocationServiceSpy();
  const sut = new DBAddOccurrence(geolocationServiceSpy);

  return { sut, geolocationServiceSpy };
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
})
