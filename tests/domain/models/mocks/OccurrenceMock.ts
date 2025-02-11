import { Occurrence } from '@/domain/models';

export const makeOccurrenceMock = (): Occurrence => ({
  id: 1,
  latitude: -9.648198,
  longitude: -35.713458,
  denunciante: {
    nome: 'José de Oliveira',
    cpf: '95761638037',
  },
  denuncia: {
    titulo: 'Esgoto a céu aberto',
    descricao: 'Existe um esgoto a céu aberto nesta localidade.',
  },
  endereco: {
    logradouro: 'Avenida Dona Constança de Góes Monteiro',
    bairro: '',
    cidade: 'Maceió',
    estado: 'Alagoas',
    pais: 'BR',
    cep: '57036-371',
  },
});
