import { Either } from '@/shared';
import { AddressNotFundError } from '@/presentation/errors/AddressNotFundError';
import { Occurrence } from '../models/Occurrence';

export interface AddOccurrenceUseCase {
  add(newOccurrence: AddOccurrenceUseCase.DTO): Promise<AddOccurrenceUseCase.Response>;
}

export namespace AddOccurrenceUseCase {
  export type DTO = {
    latitude: number
    longitude: number
    denunciante: {
      nome: string,
      cpf: string,
    }
    denuncia: {
      titulo: string,
      descricao: string
    }
  }

  export type Response = Either<AddressNotFundError, Occurrence>;
}
