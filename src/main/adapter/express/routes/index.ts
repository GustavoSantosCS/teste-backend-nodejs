import { Request, Response } from 'express';
import { HttpRequest, Controller } from '@/presentation/protocols';

export const adapterRoute = (controller: Controller) => async (
  req: Request,
  res: Response
) => {
  const httpRequest: HttpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  };

  const httpResponse = await controller.handle(httpRequest);

  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  return res.status(httpResponse.statusCode).json({
    error: httpResponse.body,
  });
};
