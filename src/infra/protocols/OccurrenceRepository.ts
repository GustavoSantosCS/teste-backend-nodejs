import { Occurrence } from '@/domain/models'
import { InternalServerError } from '@/presentation/errors'
import { Either } from '@/shared'

export interface OccurrenceRepository {
  add(newOccurrence: OccurrenceRepository.DTO): Promise<OccurrenceRepository.Response>;
}

export namespace OccurrenceRepository {
  export type DTO = Omit<Occurrence, 'id'>

  export type Response = Either<InternalServerError, Occurrence>
}
