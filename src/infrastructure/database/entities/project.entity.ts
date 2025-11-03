import { IProject } from '../../../domain/interfaces/project.interface';
import { ITask } from '../../../domain/interfaces/task.interface';
import { IUser } from '../../../domain/interfaces/user.interface';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from './task.entity';

export class ProjectEntity implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'description', nullable: false })
  description: string;

  user: IUser;
  @OneToMany(() => TaskEntity, (task) => task.project)
  task: ITask[];
}
