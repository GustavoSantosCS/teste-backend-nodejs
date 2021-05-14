import { Either } from '@/shared';
import { InternalServerError } from '@/shared/errors';
import { Occurrence } from '../models/Occurrence';

export interface AddOccurrenceUseCase {
  add(
    newOccurrence: Occurrence
  ): Promise<Either<InternalServerError, Occurrence>>;
}
