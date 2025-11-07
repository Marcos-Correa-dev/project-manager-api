import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class GetUsersByEmailService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(email: string): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}
