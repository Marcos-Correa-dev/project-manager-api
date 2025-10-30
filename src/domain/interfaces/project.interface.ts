import { IUser } from './user.interface';
import { ITask } from './task.interface';

export interface IProject {
  id: number;
  name: string;
  description: string;
  user: IUser;
  task: ITask[];
}
