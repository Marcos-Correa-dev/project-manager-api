import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUseByIdService } from './get-use-by-id.service';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { GetUsersByEmailService } from './get-users-by-email.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUseByIdService, GetUsersByEmailService],
  exports: [CreateUserService, GetUseByIdService, GetUsersByEmailService],
})
export class UsersModule {}
