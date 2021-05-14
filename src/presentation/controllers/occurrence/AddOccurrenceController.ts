import { AddOccurrenceUseCase } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/protocols';
import { badRequest, ok, serverError } from '@/utils/http';

export class AddOccurrenceController implements Controller {
  constructor(private readonly addOccurrenceUseCase: AddOccurrenceUseCase) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const requiredFields = [
      'latitude',
      'longitude',
      'denunciante',
      'denuncia',
    ];

    for (const field of requiredFields) {
      if (!body[field]) return badRequest(
        {
          code: '01',
          message: 'Request inválido.',
        }
      );
    }

    const { nome, cpf } = body.denunciante;
    if (!nome || !cpf) return badRequest(
      {
        code: '01',
        message: 'Request inválido.',
      }
    );

    const { titulo, descricao } = body.denuncia;
    if (!titulo || !descricao) return badRequest(
      {
        code: '01',
        message: 'Request inválido.',
      }
    );

    try {
      const responseAddOccurrence = await this.addOccurrenceUseCase.add(body);
      if (responseAddOccurrence.isLeft()) {
        return badRequest({
          code: '02',
          message: 'Endereço não encontrado para essa localidade.',
        });
      }
      return ok(responseAddOccurrence.value);
    } catch (error) {
      return serverError()
    }
  };

}

