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
import { IProject } from '../../../domain/interfaces/project.interface';
import { CreateProjectService } from '../../../domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from '../../../domain/use-cases/projects/get-all-projects.service';
import { GetProjectsByIdService } from '../../../domain/use-cases/projects/get-projects-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly createProjectUseCase: CreateProjectService,
    private readonly getAllProjectsUseCase: GetAllProjectsService,
    private readonly getProjectsByIdUseCase: GetProjectsByIdService,
  ) {}

  @Get()
  findAll(@Req() request): Promise<IProject[]> {
    try {
      const loggedUser = request.user;
      return this.getAllProjectsUseCase.execute(loggedUser.sub);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;
      return this.getProjectsByIdUseCase.execute({
        projectId: id,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    try {
      const loggedUser = request.user;
      return this.createProjectUseCase.execute({
        project: createProjectDto,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
