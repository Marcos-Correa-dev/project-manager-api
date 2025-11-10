import { IProject } from '../../../domain/interfaces/project.interface';
import { ITask } from '../../../domain/interfaces/task.interface';
import type { IUser } from '../../../domain/interfaces/user.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';

@Entity('project')
export class ProjectEntity implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'description', nullable: false })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.task)
  @JoinColumn()
  user: IUser;
  @OneToMany(() => TaskEntity, (task) => task.project)
  task: ITask[];
}
