import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { TrpcService } from './trpc.service';
import { ProjectsService } from '../projects/projects.service';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly projectsService: ProjectsService,
    private readonly profileService: ProfileService,
  ) {}

  appRouter = this.trpc.router({
    profile: this.trpc.router({
      get: this.trpc.procedure.query(async () => {
        return this.profileService.getProfile();
      }),
    }),
    projects: this.trpc.router({
      list: this.trpc.procedure.query(async () => {
        return this.projectsService.findAll();
      }),
      getById: this.trpc.procedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
          return this.projectsService.findById(input.id);
        }),
    }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
