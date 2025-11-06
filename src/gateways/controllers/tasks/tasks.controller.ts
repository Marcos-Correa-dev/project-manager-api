import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
import { CreateTaskService } from '../../../domain/use-cases/tasks/create-task.service';
import { GetTaskByIdService } from '../../../domain/use-cases/tasks/get-task-by-id.service';
import { GetAllTasksService } from '../../../domain/use-cases/tasks/get-all-tasks.service';

const loogerUser = 1;

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTaskUseCase: CreateTaskService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly getAllTaskUseCase: GetAllTasksService,
  ) {}

  @Get()
  findAll() {
    console.log('Processando GET em Tasks)');
    try {
      return this.getAllTaskUseCase.execute({ userId: loogerUser });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') taskId: number) {
    console.log('Processando GET em Tasks - get_get_task_by_id');
    try {
      return this.getTaskByIdUseCase.execute({
        taskId: taskId,
        userId: loogerUser,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    console.log('Processando POST em Tasks - post_create_task');
    try {
      return this.createTaskUseCase.execute({
        task: createTaskDto,
        userId: loogerUser,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
