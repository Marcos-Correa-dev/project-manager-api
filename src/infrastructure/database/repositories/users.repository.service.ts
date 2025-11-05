import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUsersRepository } from '../../../domain/repositories/users.repository.interface';
import { IUser } from '../../../domain/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService
  extends Repository<UserEntity>
  implements IUsersRepository
{
  constructor(dataSouce: DataSource) {
    super(UserEntity, dataSouce.createEntityManager());
  }
  findById(id: number): Promise<IUser> {
    return this.findById(id);
  }
  add(payload: DeepPartial<IUser>): Promise<IUser> {
    return this.save(payload);
  }
}
