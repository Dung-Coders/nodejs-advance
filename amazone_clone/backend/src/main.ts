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
// Setup cache
// yarn add @nestjs/cache-manager cache-manager@5.7.6
// Setup Redis
// docker run --name some-redis -d -p 6379:6379 redis redis-server --requirepass 1234
// To connect Cache to Redis
// yarn add redis cache-manager-redis-store@2.0.0
