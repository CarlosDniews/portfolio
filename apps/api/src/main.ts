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

  const corsOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
    : ['http://localhost:3000'];

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      // Allow configured origins
      if (corsOrigins.some((o) => origin === o || origin.endsWith('.vercel.app'))) {
        return callback(null, true);
      }
      callback(null, false);
    },
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
