import { IUser } from '../interfaces/user.interface';
import { DeepPartial } from 'typeorm';

export interface IUsersRepository {
  findById(id: number): Promise<IUser>;
  add(payload: DeepPartial<IUser>): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
}
