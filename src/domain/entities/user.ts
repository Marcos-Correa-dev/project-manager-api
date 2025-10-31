import { IUser } from '../interfaces/user.interface';
import { Project } from './project';
import { Task } from './task';

export class User implements IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  projects: Project[];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  task: Task[];
}
