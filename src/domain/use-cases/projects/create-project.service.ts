import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from '../../../infrastructure/database/repositories/projects.repository.service';
import { CreateProjectDto } from '../../../gateways/controllers/dtos/create-project.dto';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { IProject } from '../../interfaces/project.interface';

@Injectable()
export class CreateProjectService implements BaseUseCase {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async execute(payload: {
    project: CreateProjectDto;
    userId: number;
  }): Promise<IProject> {
    const userData = await this.usersRepository.findById(payload.userId);

    const createProject = await this.projectsRepository.add({
      name: payload.project.name,
      description: payload.project.description,
      user: { id: userData.id },
    });

    if (!createProject) {
      throw new Error('Project not created');
    }

    return createProject;
  }
}
