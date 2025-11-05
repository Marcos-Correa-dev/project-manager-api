import { ITask } from '../interfaces/task.interface';
import { DeepPartial } from 'typeorm';

export interface ITasksRepository {
  findAll(userId: number): Promise<ITask[]>;
  findById(id: number): Promise<ITask | null>;
  add(payload: DeepPartial<ITask>): Promise<ITask>;
  updateById(id: number, payload: DeepPartial<ITask>);
}
