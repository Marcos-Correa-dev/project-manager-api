import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class GetUseByIdService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(userId: number): Promise<IUser> {
    return this.usersRepository.findById(userId);
  }
}
