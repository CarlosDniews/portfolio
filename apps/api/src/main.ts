import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';

export const expressApp = express();

let isInitialized = false;

export async function createApp() {
  if (isInitialized) return;

  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  });

  app.use(helmet());

  const trpcRouter = app.get(TrpcRouter);
  await trpcRouter.applyMiddleware(app);

  await app.init();
  isInitialized = true;

  return app;
}

async function bootstrap() {
  const app = await createApp();
  const port = process.env.PORT || 4000;
  await expressApp.listen(port);
  console.log(`🚀 API running on http://localhost:${port}`);
}

// Only start server when running directly (not in serverless)
if (require.main === module) {
  bootstrap();
}
