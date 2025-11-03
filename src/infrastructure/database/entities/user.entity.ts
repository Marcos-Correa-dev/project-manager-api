import { IUser } from '../../../domain/interfaces/user.interface';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { IProject } from '../../../domain/interfaces/project.interface';
import { ITask } from '../../../domain/interfaces/task.interface';
import { TaskEntity } from './task.entity';

export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'first_name', nullable: false })
  firstName: string;
  @Column({ name: 'last_name', nullable: false })
  lastName: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: IProject[];
  @OneToMany(() => TaskEntity, (task) => task.user)
  task: ITask[];
}
