import { IProject } from '../interfaces/project.interface';
import { User } from './user';
import { Task } from './task';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  user: User;
  tasks: Task[];
}