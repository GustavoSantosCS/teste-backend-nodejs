import 'module-alias/register';
import app from '@/main/config/app';
import * as env from '@/main/config/env';
import { MongoHelper } from './infra/db/mongodb';

MongoHelper.connect(env.mongo.url).then(() =>{
  app.listen(3000, () => {
    console.log('Backend Online');
    console.log('Click para acessar: http://localhost:3000');
  });
})
.catch(console.log)
