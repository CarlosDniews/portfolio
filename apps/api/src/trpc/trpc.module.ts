import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { ProjectsModule } from '../projects/projects.module';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [ProjectsModule, ProfileModule],
  providers: [TrpcService, TrpcRouter],
  exports: [TrpcRouter],
})
export class TrpcModule {}
