import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiConsumes, ApiProperty, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { AuthGuard } from '@nestjs/passport';

// class UploadType {
//   @ApiProperty({ type: 'string', format: 'binary' }) //of swagger
//   hinhAnh: any;
// }

@ApiTags("user")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //yarn add @types/multer
  // @ApiConsumes('multipart/form-data') //of swagger
  // @ApiBody({
  //   type: UploadType
  // })
  @UseInterceptors(FileInterceptor("hinhAnh", {
    storage: diskStorage({
      destination: process.cwd() + "/public/imges", // đường dẫn lưu
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload")
  upload(@UploadedFile() file: Express.Multer.File) {
    return file
  }


  @UseInterceptors(FilesInterceptor("hinhAnh", 10, {
    storage: diskStorage({
      destination: process.cwd() + "/public/imges",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-multi")
  uploadMulti(@UploadedFiles() file) {
    return file
  }

  //crud
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
