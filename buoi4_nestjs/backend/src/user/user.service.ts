import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaMysqlService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaMysqlService: PrismaMysqlService){}

  async create(createUserDto: CreateUserDto) {
    let model = {
      user_id: 0,
      full_name: "",
      email: "",
      password: ""
    }
    await this.prismaMysqlService.users.create({data: model})
    await this.prismaMysqlService.users.update({data: model, where:{user_id:0}})

    return 'This action adds a new user';
  }

  async findAll() {
  
    return await this.prismaMysqlService.users.findMany({where:{user_id:1}});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
