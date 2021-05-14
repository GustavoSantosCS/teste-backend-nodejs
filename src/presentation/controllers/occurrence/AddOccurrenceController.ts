import { AddOccurrenceUseCase } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/protocols';
import { badRequest, serverError } from '@/utils/http';

export class AddOccurrenceController implements Controller {
  constructor(private readonly addOccurrenceUseCase: AddOccurrenceUseCase) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      this.addOccurrenceUseCase.add(httpRequest.body);
    } catch (error) {
      return serverError()
    }

    return badRequest({
      code: '01',
      message: 'Request inválido.',
    })
  };

}

