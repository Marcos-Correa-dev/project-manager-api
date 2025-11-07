import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUseByIdService } from './get-use-by-id.service';
import { DatabaseModule } from '../../../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUseByIdService],
  exports: [CreateUserService, GetUseByIdService],
})
export class UsersModule {}
