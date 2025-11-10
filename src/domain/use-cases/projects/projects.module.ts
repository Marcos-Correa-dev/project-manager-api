import { Module } from '@nestjs/common';
import { GetAllTasksService } from '../tasks/get-all-tasks.service';
import { GetProjectsByIdService } from './get-projects-by-id.service';
import { CreateProjectService } from './create-project.service';
import { GetAllProjectsService } from './get-all-projects.service';
import { DatabaseModule } from '../../../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetAllTasksService,
    GetProjectsByIdService,
    CreateProjectService,
    GetAllProjectsService,
  ],
  exports: [
    GetAllProjectsService,
    GetProjectsByIdService,
    CreateProjectService,
  ],
})
export class ProjectsModule {}
