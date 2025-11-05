import { ITask } from '../../../domain/interfaces/task.interface';
import * as projectInterface from '../../../domain/interfaces/project.interface';
import * as userInterface from '../../../domain/interfaces/user.interface';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { UserEntity } from './user.entity';

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
  @ManyToOne(() => UserEntity, (user) => user.task)
  @JoinColumn()
  project: projectInterface.IProject;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn()
  user: userInterface.IUser;
}
