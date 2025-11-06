import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUseByIdrService } from './get-use-by-id.service';
import { DatabaseModule } from '../../../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUseByIdrService],
  exports: [CreateUserService, GetUseByIdrService],
})
export class UsersModule {}
