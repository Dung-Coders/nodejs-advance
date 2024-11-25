import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({ isGlobal:true })
    , PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
