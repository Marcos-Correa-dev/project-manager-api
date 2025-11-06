import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetUseByIdService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(userId: number): Promise<unknown> {
    return this.usersRepository.findById(userId);
  }
}
