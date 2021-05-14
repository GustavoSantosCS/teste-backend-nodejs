import { Occurrence } from '@/domain/models';
import { OccurrenceRepository } from '@/infra/protocols';
import { right } from '@/shared';

class OccurrenceRepositorySpy implements OccurrenceRepository {
  value: Occurrence;

  async add(newOccurrence: OccurrenceRepository.DTO): Promise<OccurrenceRepository.Response> {
    this.value = { id: 1, ...newOccurrence };
    return right(this.value);
  }

}

export const makeOccurrenceRepositorySpy = (): OccurrenceRepository => new OccurrenceRepositorySpy();
