import { Occurrence } from '@/domain/models';
import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService, OccurrenceRepository } from '@/infra/protocols';
import { AddressNotFundError } from '@/presentation/errors/AddressNotFundError';
import { Either, left, right } from '@/shared';

export class DBAddOccurrence implements AddOccurrenceUseCase {
  constructor(
    private readonly geolocationService: GeolocationService,
    private readonly occurrenceRepository: OccurrenceRepository
  ) { }

  async add(newOccurrence: AddOccurrenceUseCase.DTO): Promise<AddOccurrenceUseCase.Response> {
    const { latitude, longitude, denuncia, denunciante } = newOccurrence;
    const responseGeolocation: Either<AddressNotFundError,
      {
        logradouro: string;
        bairro: string;
        cidade: string;
        estado: string;
        pais: string;
        cep: string;
      }> = await this.geolocationService.getLocation({ latitude, longitude })

    if (responseGeolocation.isLeft()) {
      return left(responseGeolocation.value);
    }

    const endereco = responseGeolocation.value;

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
