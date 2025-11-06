import { CreateUserService } from '../../../domain/use-cases/users/create-user.service';
import { CreateUserDto } from './create-user.dto';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { GetUseByIdService } from '../../../domain/use-cases/users/get-use-by-id.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserByIdService: GetUseByIdService,
    private readonly createUserUseCase: CreateUserService,
  ) {}

  @Get()
  async findOne(@Param('id') id: number) {
    try {
      return this.getUserByIdService.execute(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.createUserUseCase.execute(createUserDto);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
