import 'module-alias/register';
import app from '@/main/config/app';
import * as env from '@/main/config/env';
import { MongoHelper } from './infra/db/mongodb';

const url = `mongodb://${env.db.host}:${env.db.port}/${env.db.database}`;

console.log(url);

MongoHelper.connect(url).then(() =>{
  app.listen(env.app.port, () => {
    console.log('Backend Online');
    console.log(`Click para acessar: http://localhost:${env.app.port}`);
  });
})
.catch(console.log)
