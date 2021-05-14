import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';

export class AddOccurrenceController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 400,
      body: {
        code: '01',
        message: 'Request inválido.',
      },
    };
  }
}
