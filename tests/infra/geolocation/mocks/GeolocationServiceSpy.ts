import { GeolocationService } from '@/infra/protocols'
import { right } from '@/shared';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';

class GeolocationServiceSpy implements GeolocationService {
  async getLocation(coordinates: GeolocationService.DTO): Promise<GeolocationService.Response> {
    return right(makeOccurrenceMock().endereco);
  }
}

export const makeGeolocationServiceSpy = (): GeolocationService => new GeolocationServiceSpy();
