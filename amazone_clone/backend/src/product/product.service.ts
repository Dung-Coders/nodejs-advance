import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ) {}

  //search logic
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
  //ordered logic
  async orders(order){
    let {email, product_id, user_id, full_name, phone, address} = order;

    //sending mail to user
    let configMail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vandung1916@gmail.com',
        pass: 'your app passwork key',
      },
    });
    let infoMail = {
      from: 'vandung1916@gmail.com',
      to: email, // "khaitruong2112@gmail.com"
      subject: 'Đặt hàng qua Amazon',
      html: '<h1> Xác nhận đợn hàng thành công </h1>',
    };

    configMail.sendMail(infoMail, (error) => error);
    //saving orders
    let orderData = await this.prismaService.orders.create({data: {product_id, user_id}});

    //saving shipping
    if(orderData){
      //save database in Mysql
      console.log("Saving shipping" + orderData.orders_id)
    }
    //mail sended successfully
    infoMail = {
      from: 'vandung1916@gmail.com',
      to: email, // "khaitruong2112@gmail.com"
      subject: 'Odered products from Amazon',
      html: '<h1> Xác nhận đợn hàng thành công </h1>',
    };

    configMail.sendMail(infoMail, (error) => error);

    return "Ordered successfully!";
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
