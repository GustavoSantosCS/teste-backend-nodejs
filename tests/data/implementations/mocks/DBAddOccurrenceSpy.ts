import { OccurrenceRepository } from '@/infra/protocols';

import { AddOccurrenceUseCase } from '@/domain/usecases';
import { right } from '@/shared';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';

class DBAddOccurrenceSpy implements AddOccurrenceUseCase {
  async add(
    occurrence: AddOccurrenceUseCase.DTO
  ): Promise<AddOccurrenceUseCase.Response> {
    return right(makeOccurrenceMock());
  }
}

export const makeDBAddOccurrenceSpy = (): AddOccurrenceUseCase =>
  new DBAddOccurrenceSpy();
