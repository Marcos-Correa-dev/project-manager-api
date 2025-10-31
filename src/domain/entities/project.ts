import { IProject } from '../interfaces/project.interface';
import { User } from './user';
import { Task } from './task';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  user: User;
  tasks: Task[];
}
