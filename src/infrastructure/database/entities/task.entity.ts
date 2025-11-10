import { ITask } from '../../../domain/interfaces/task.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectEntity } from './project.entity';
import { UserEntity } from './user.entity';
import * as projectInterface from '../../../domain/interfaces/project.interface';
import * as userInterface from '../../../domain/interfaces/user.interface';

@Entity('task')
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'status', nullable: false })
  status: 'pending' | 'completed';

  @ManyToOne(() => ProjectEntity, (project) => project.task, {
    cascade: true,
    nullable: false,
  })
  project: projectInterface.IProject;

  @ManyToOne(() => UserEntity, (user) => user.task)
  @JoinColumn()
  user: userInterface.IUser;
}
