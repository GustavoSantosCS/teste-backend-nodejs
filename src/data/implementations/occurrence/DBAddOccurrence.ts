import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService } from '@/infra/protocols';
import { left } from '@/shared';

export class DBAddOccurrence implements AddOccurrenceUseCase {
  constructor(private readonly geolocationService: GeolocationService) { }

  async add(newOccurrence: AddOccurrenceUseCase.DTO): Promise<AddOccurrenceUseCase.Response> {
    const { latitude, longitude } = newOccurrence;
    const responseGeoLoc = await this.geolocationService.getLocation({ latitude, longitude })

    if (responseGeoLoc.isLeft()) return left(responseGeoLoc.value);

    return null;
  }

}
