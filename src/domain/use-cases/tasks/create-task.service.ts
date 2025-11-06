import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from '../../../infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { ProjectsRepositoryService } from '../../../infrastructure/database/repositories/projects.repository.service';
import { CreateTaskDto } from '../../../gateways/controllers/tasks/create-task.dto';
import { ITask } from '../../interfaces/task.interface';

@Injectable()
export class CreateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: {
    task: CreateTaskDto;
    userId: number;
  }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);
    const projectData = await this.projectsRepository.findById(
      userData.id,
      payload.task.projectId,
    );

    const createdTask = await this.tasksRepository.add({
      name: payload.task.name,
      status: payload.task.status,
      project: { id: projectData?.id },
      user: { id: userData.id },
    });

    if (!createdTask) {
      throw new Error('Erro ao criar tarefa');
    }

    return createdTask;
  }
}
