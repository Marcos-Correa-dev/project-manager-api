import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectsRepository } from '../../../domain/repositorues/projects-repository.interface';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IProject } from '../../../domain/interfaces/project.interface';

@Injectable()
export class ProjectsRepositoryService
  extends Repository<ProjectEntity>
  implements IProjectsRepository
{
  constructor(dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }
  findAll(userId: number): Promise<IProject[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<IProject | null> {
    return this.findOneBy({ id });
  }
  add(payload: DeepPartial<IProject>) {
    return this.save(payload);
  }
}
