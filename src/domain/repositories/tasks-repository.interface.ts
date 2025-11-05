import { ITask } from '../interfaces/task.interface';
import { DeepPartial } from 'typeorm';

export interface ITasksRepository {
  findAll(userId: number): Promise<ITask[]>;
  findById(userId: number, id: number): Promise<ITask>;
  add(payload: DeepPartial<ITask>): Promise<ITask>;
  updateById(id: number, payload: DeepPartial<ITask>);
}
