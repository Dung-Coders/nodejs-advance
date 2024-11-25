import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async searchProduct(name) {
    let data = await this.prismaService.product.findMany({
      where: {
        product_name: {
          contains: name,
        },
      },
    });
    return data;
  }

  //crud
  async create(data: any) {
    return this.prismaService.product.create({ data });
  }
  async findAll() {
    return this.prismaService.product.findMany();
  }
  async findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { product_id: id } });
  }
  async update(id: number, data: any) {
    return this.prismaService.product.update({ where: { product_id: id }, data });
  }
  async remove(id: number) {
    return this.prismaService.product.delete({ where: { product_id: id } });
  }
}
