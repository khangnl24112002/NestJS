import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Bind,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // @Bind(Param('id'))
  // findOne(id) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // @Bind(Param('id'), Body())
  // update(id, updateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // @Bind(Param('id'))
  // remove(id) {
  //   return `This action removes a #${id} cat`;
  // }
}
