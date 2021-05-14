import { AddOccurrenceUseCase } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/protocols';

export class AddOccurrenceController implements Controller {
  constructor(private readonly addOccurrenceUseCase: AddOccurrenceUseCase) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      this.addOccurrenceUseCase.add(httpRequest.body);
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          error: {
            code: '03',
            message: 'Erro no servidor.',
          },
        },
      };
    }

    return {
      statusCode: 400,
      body: {
        code: '01',
        message: 'Request inválido.',
      },
    };

  }
}
