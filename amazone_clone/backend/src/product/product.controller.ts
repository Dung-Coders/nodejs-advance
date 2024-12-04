import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller('product')
@UseInterceptors(CacheInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ) {}

  //build search func
  @Get("/search")
  searchProduct(@Query("name") name){
    return this.productService.searchProduct(name);
  }
  //build ordered func
  @Post("/order")
  orders(@Body() order){
    return this.productService.orders(order);
  }

  //crud
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
