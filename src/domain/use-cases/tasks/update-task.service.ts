import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from '../../../infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { UpdateTaskDto } from '../../../gateways/controllers/tasks/update-task.dto';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}
  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<unknown> {
    const userData = await this.usersRepository.findById(payload.userId);

    await this.tasksRepository.updateById(userData.id, payload.task);
    return this.tasksRepository.findById(userData.id, payload.task.id);
  }
}
