import { MapQuestService } from '@/infra/geolocation';
import { AddressNotFundError } from '@/presentation/errors';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';
import { GeolocationService } from '../protocols';

describe('Test Integration: MapQuestService', () => {
  it('should return a address if correct coordinates is provider', async () => {
    const sut = new MapQuestService();

    const response = await sut.getLocation({ latitude: -9.648198, longitude: -35.713458 })
    expect(response.isRight()).toBe(true);
    const address = (response.value as GeolocationService.Address);

    expect(address).toEqual(makeOccurrenceMock().endereco);
  });

  it('should return a AddressNotFundError if incorrect coordinates is provider', async () => {
    const sut = new MapQuestService();

    const response = await sut.getLocation(
      {
        latitude: -92222.648198,
        longitude: -35.713458,
      }
    );
    expect(response.isLeft()).toBe(true);
    expect(response.value).toEqual(new AddressNotFundError());

  });
})
