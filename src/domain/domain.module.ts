import { Module } from '@nestjs/common';
import { UseCasesModule } from './use-cases/use-cases.module';
import { GetAllProjectsService } from './use-cases/projects/get-all-projects.service';
import { GetProjectsByIdService } from './use-cases/projects/get-projects-by-id.service';
import { CreateProjectService } from './use-cases/projects/create-project.service';

@Module({
  imports: [UseCasesModule],
  providers: [
    GetAllProjectsService,
    GetProjectsByIdService,
    CreateProjectService,
  ],
})
export class DomainModule {}
