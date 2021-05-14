export type Occurrence = {
  id?: number;
  titulo: string;
  descricao: string;
  endereco: {
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
  };
  denunciante: {
    nome: string;
    cpf: string;
  };
};
