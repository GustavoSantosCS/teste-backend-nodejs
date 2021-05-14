import { AddOccurrenceUseCase } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/protocols';

export class AddOccurrenceController implements Controller {
  constructor(private readonly addOccurrenceUseCase: AddOccurrenceUseCase) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    this.addOccurrenceUseCase.add(httpRequest.body);

    return {
      statusCode: 400,
      body: {
        code: '01',
        message: 'Request inválido.',
      },
    };
  }
}
