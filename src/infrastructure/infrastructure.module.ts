import { Module } from '@nestjs/common';
import { DatabaseRepositoryModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseRepositoryModule, AuthModule],
})
export class InfrastructureModule {}
