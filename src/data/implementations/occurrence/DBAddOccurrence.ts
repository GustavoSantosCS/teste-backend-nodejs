import { Occurrence } from '@/domain/models';
import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService, OccurrenceRepository } from '@/infra/protocols';
import { CacheProvider } from '@/infra/protocols/CacheProvider';
import { AddressNotFundError } from '@/presentation/errors/AddressNotFundError';
import { Either, left, right } from '@/shared';

export class DBAddOccurrence implements AddOccurrenceUseCase {
  constructor(
    private readonly geolocationService: GeolocationService,
    private readonly occurrenceRepository: OccurrenceRepository,
    private readonly cacheProvider: CacheProvider
  ) { }

  async add(newOccurrence: AddOccurrenceUseCase.DTO): Promise<AddOccurrenceUseCase.Response> {
    const { latitude, longitude, denuncia, denunciante } = newOccurrence;
    const cacheKey = `geolocation:${latitude}-${longitude}`;

    let endereco = await this.cacheProvider.recover<GeolocationService.Address>(cacheKey);
    if(!endereco){
      const responseGeolocation: Either<AddressNotFundError, GeolocationService.Address> = await this.geolocationService.getLocation({ latitude, longitude })

      if (responseGeolocation.isLeft()) {
        return left(responseGeolocation.value);
      }

      endereco = responseGeolocation.value as GeolocationService.Address;
      await this.cacheProvider.save(cacheKey, endereco);
    }


    const occurrence: Occurrence = {
      denuncia,
      denunciante,
      endereco,
      latitude,
      longitude,
    }

    const { value: persistOccurrence } = await this.occurrenceRepository.add(occurrence);

    return right(persistOccurrence as Occurrence);
  }

}
