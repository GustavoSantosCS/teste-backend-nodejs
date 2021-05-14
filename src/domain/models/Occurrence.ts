export type Occurrence = {
  id?: number;
  latitude: number;
  longitude: number;
  denunciante: {
    nome: string;
    cpf: string;
  };
  denuncia: {
    titulo: string;
    descricao: string;
  };
  endereco: {
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
  };
};
