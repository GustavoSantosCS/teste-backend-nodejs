import { AddressNotFundError } from '@/presentation/errors';
import { Either } from '@/shared';

export interface GeolocationService {
  getLocation(
    coordinates: GeolocationService.DTO
  ): Promise<GeolocationService.Response>;
}

export namespace GeolocationService {
  export type DTO = {
    latitude: number;
    longitude: number;
  };

  export type Response = Either<
    AddressNotFundError,
    {
      logradouro: string;
      bairro: string;
      cidade: string;
      estado: string;
      pais: string;
      cep: string;
    }
  >;
}
