import { AddOccurrenceUseCase } from '@/domain/usecases';
import { GeolocationService } from '@/infra/protocols';

export class DBAddOccurrence implements AddOccurrenceUseCase {
  constructor(private readonly geolocationService: GeolocationService) { }

  async add(newOccurrence: AddOccurrenceUseCase.DTO): Promise<AddOccurrenceUseCase.Response> {
    const { latitude, longitude } = newOccurrence;
    this.geolocationService.getLocation({ latitude, longitude })
    return null;
  }

}
