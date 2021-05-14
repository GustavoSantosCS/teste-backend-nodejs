import { HttpRequest } from '@/presentation/protocols';
import { makeOccurrenceMock } from '@tests/domain/models/mocks';

export const makeHttpRequestMock = (): HttpRequest => {
  const { latitude, longitude, denunciante, denuncia } = makeOccurrenceMock();

  return {
    body: {
      latitude,
      longitude,
      denunciante,
      denuncia,
    },
  };
};
