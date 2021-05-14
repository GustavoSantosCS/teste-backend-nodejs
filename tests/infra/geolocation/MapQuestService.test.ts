import { MapQuestService } from '@/infra/geolocation';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';
import { GeolocationService } from '../protocols';

describe('Test Integration: MapQuestService', () => {
  it('should return correct address if correct coordinates is provider', async () => {
    const sut = new MapQuestService();

    const response = await sut.getLocation({ latitude: -9.648198, longitude: -35.713458 })
    expect(response.isRight()).toBe(true);
    const address = (response.value as GeolocationService.Address);

    expect(address).toEqual(makeOccurrenceMock().endereco);
  });
})
