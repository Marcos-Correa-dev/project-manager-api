import { IProject } from '../interfaces/project.interface';
import { DeepPartial } from 'typeorm';

export interface IProjectsRepository {
  findAll(userId: number): Promise<IProject[]>;
  findById(id: number): Promise<IProject | null>;
  add(payload: DeepPartial<IProject>);
}
