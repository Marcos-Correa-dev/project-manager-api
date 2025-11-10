import { Module } from '@nestjs/common';
import { ControllersModule } from '../gateways/controllers/controllers.module';
import { AuthGuardService } from './guards/auth-guard/auth-guard.service';

@Module({
  imports: [ControllersModule],
  controllers: [AuthGuardService],
  providers: [AuthGuardService],
})
export class GatewaysModule {}
