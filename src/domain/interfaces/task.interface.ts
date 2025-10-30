import { IProject } from '../entities/project';
import { IUser } from '../entities/user';

export interface ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
