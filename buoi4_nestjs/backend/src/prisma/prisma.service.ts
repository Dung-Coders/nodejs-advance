import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.zprisma/client-postgres';
import { PrismaClient as PrismaClientMysql} from '.zprisma/client-mysql';

@Injectable()
export class PrismaPostgreService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
@Injectable()
export class PrismaMysqlService extends PrismaClientMysql implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
