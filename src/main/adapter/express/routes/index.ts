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
  return res.status(httpResponse.statusCode).json(httpResponse.body);
 };
