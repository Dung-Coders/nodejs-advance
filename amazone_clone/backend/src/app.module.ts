import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({isGlobal:true}),
    ProductModule,
    RedisCacheModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
