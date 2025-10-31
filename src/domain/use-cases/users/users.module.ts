import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUseByIdrService } from './get-use-by-idr.service';

@Module({
  providers: [CreateUserService, GetUseByIdrService]
})
export class UsersModule {}
