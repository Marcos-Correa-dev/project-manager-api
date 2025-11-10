import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from '../../../infrastructure/database/repositories/tasks.repository.service';
import { ITask } from '../../interfaces/task.interface';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}
  async execute(payload: { taskId: number; userId: number }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);

    const task = await this.tasksRepository.findById(
      userData.id,
      payload.taskId,
    );

    if (!task) {
      throw new Error('Task not found');
    }

    return task;
  }
}
