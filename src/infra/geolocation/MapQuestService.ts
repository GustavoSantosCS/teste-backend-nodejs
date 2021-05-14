import { GeolocationService } from '@/infra/protocols'
import { AddressNotFundError } from '@/presentation/errors';
import { left, right } from '@/shared';
import { mapQuestApi } from '@/shared/config/env';
import axios from 'axios'

type ApiResponse = {
  results: [
    {
      locations: [
        {
          street: string,
          adminArea6: string,
          adminArea5: string,
          adminArea4: string,
          adminArea3: string,
          adminArea1: string,
          postalCode: string,
        }
      ]
    }
  ]
}


export class MapQuestService implements GeolocationService {
  async getLocation({ latitude, longitude }: GeolocationService.DTO): Promise<GeolocationService.Response> {
    const { key } = mapQuestApi;
    const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${latitude},${longitude}8&includeRoadMetadata=true&includeNearestIntersection=true`;
    const { data } = await axios.get<ApiResponse>(url)

    const [address] = data.results[0].locations;

    if (!address) {
      return left(new AddressNotFundError());
    }

    const {
      street: logradouro,
      adminArea6: bairro,
      adminArea5: cidade,
      adminArea3: estado,
      adminArea1: pais,
      postalCode: cep,
    } = address;
    return right({
      logradouro,
      bairro,
      cidade,
      estado,
      pais,
      cep,
    })
  }

}
