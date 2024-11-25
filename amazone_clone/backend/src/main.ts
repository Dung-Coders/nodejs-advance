declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

//setup prisma
//yarn add prisma @prisma/client
//yarn prisma init
//update .env and schema.prisma
//yarn prisma db pull (to pull data from database)
//yarn prisma generate

//yarn add @nestjs/config  (for prisma read .env)
