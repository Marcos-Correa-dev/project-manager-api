import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../base-use-case';
import { CreateUserDto } from '../../../gateways/controllers/users/create-user.dto';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class CreateUserService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(...args: unknown[]): Promise<unknown> {
    const createdUser = await this.usersRepository.add(args[0]);

    if (!createdUser) {
      throw new Error('User not created');
    }

    return createdUser;
  }
}
