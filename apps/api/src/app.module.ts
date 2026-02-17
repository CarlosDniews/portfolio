import { Module } from '@nestjs/common';
import { TrpcModule } from './trpc/trpc.module';
import { ProjectsModule } from './projects/projects.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [TrpcModule, ProjectsModule, ProfileModule],
})
export class AppModule {}
