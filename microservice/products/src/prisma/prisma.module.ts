import { Global, Module } from '@nestjs/common';
import { PrismaPostgreService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaPostgreService],
    exports: [PrismaPostgreService]
})


export class PrismaModule {}
