import { Occurrence } from '@/domain/models';
import { AddOccurrenceUseCase } from '@/domain/usecases';
import { AddressNotFundError } from '@/presentation/errors/AddressNotFundError';
import { Either, right } from '@/shared';
import { makeOccurrenceMock } from '@tests/domain/models/mock';

class DBAddOccurrenceSpy implements AddOccurrenceUseCase {
  async add(
    occurrence: AddOccurrenceUseCase.DTO
  ): Promise<Either<AddressNotFundError, Occurrence>> {
    return right(makeOccurrenceMock());
  }
}

export const makeDBAddOccurrenceSpy = (): AddOccurrenceUseCase =>
  new DBAddOccurrenceSpy();
