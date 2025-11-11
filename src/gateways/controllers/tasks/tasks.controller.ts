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
import { CreateTaskService } from '../../../domain/use-cases/tasks/create-task.service';
import { GetTaskByIdService } from '../../../domain/use-cases/tasks/get-task-by-id.service';
import { GetAllTasksService } from '../../../domain/use-cases/tasks/get-all-tasks.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) {}

  @Get()
  findAll(@Req() request) {
    console.log('Processando requisição em Tasks');
    const loggedUser = request.user;

    try {
      return this.getAllTasksUseCase.execute({ userId: loggedUser.sub });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') taskId: number) {
    console.log('Processando GET em Tasks - get_task_by_id');
    const loggedUser = request.user;

    try {
      return this.getTaskByIdUseCase.execute({
        taskId: taskId,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    console.log('Processando POST em Tasks - create_task');
    const loggedUser = request.user;
    try {
      return this.createTaskUseCase.execute({
        task: createTaskDto,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
