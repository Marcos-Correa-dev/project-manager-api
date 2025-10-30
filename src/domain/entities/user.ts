import { IUser } from '../interfaces/user.interface';
import { Project } from './project';
import { Task } from './task';

export class User implements IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  projects: Project[];
  task: Task[];
}