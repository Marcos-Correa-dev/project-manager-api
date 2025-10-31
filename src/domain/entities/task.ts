import { ITask } from '../interfaces/task.interface';
import { Project } from './project';
import { User } from './user';

export class Task implements ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  project: Project;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  user: User;
}
