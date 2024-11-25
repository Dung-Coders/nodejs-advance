import { Global, Module } from '@nestjs/common';
import { PrismaMysqlService, PrismaPostgreService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaPostgreService, PrismaMysqlService],
    exports: [PrismaPostgreService, PrismaMysqlService]
})


export class PrismaModule {}
