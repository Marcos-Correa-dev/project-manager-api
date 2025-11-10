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
import { CreateProjectService } from '../../../domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from '../../../domain/use-cases/projects/get-all-projects.service';
import { IProject } from '../../../domain/interfaces/project.interface';
import { CreateProjectDto } from './dtos/create-project.dto';
import { GetProjectsByIdService } from '../../../domain/use-cases/projects/get-projects-by-id.service';

const loggedUser = 1;

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly createProjectUseCase: CreateProjectService,
    private readonly getAllProjectsUseCase: GetAllProjectsService,
    private readonly getProjectsByIdUseCase: GetProjectsByIdService,
  ) {}

  @Get()
  findAll(): Promise<IProject[]> {
    try {
      return this.getAllProjectsUseCase.execute(loggedUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') id: number) {
    try {
      return this.getProjectsByIdUseCase.execute({
        projectId: id,
        userId: loggedUser,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    try {
      return this.createProjectUseCase.execute({
        project: createProjectDto,
        userId: loggedUser,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
