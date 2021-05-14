import { Router } from 'express';
import { makeAddController } from '@/main/factory';
import { adapterRoute } from '@/main/adapter/express/routes';

export default (router: Router): void => {
  router.post('/v1/denuncias', adapterRoute(makeAddController()));
};
