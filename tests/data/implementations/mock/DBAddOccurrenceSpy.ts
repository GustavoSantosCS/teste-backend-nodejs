import { Occurrence } from '@/domain/models';
import { AddOccurrenceUseCase } from '@/domain/usecases';
import { Either, InternalServerError, right } from '@/shared';
import { makeOccurrenceMock } from '@tests/domain/models/mock';

class DBAddOccurrenceSpy implements AddOccurrenceUseCase {
  async add(
    newOccurrence: Occurrence
  ): Promise<Either<InternalServerError, Occurrence>> {
    return right(makeOccurrenceMock());
  }
}

export const makeDBAddOccurrenceSpy = (): AddOccurrenceUseCase =>
  new DBAddOccurrenceSpy();
