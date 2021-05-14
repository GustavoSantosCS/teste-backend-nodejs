export class AddressNotFundError extends Error {
  code: string;

  constructor() {
    super('Endereço não encontrado para essa localidade.');
    this.name = 'AddressNotFundError';
    this.code = '02';
  }
}
