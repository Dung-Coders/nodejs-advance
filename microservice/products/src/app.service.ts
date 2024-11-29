import { Injectable } from '@nestjs/common';
import { PrismaPostgreService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaPostgreService){}

  async getProduct(){
    return await this.prismaService.products.findMany();
  }
}
