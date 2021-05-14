import { HttpResponse } from '@/presentation/protocols';

export type ErrorMessage = {
  code: string,
  message: string
}

export const badRequest = (errorMessage: ErrorMessage): HttpResponse => ({
  statusCode: 400,
  body: { error: errorMessage },
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: {
    error: {
      code: '03',
      message: 'Erro no servidor.',
    },
  },
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
