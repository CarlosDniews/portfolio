import { expressApp, createApp } from '../src/main';

export default async function handler(req: any, res: any) {
  await createApp();
  expressApp(req, res);
}
