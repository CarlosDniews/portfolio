# Portfolio - Carlos Daniel Alves da Rosa

Portfólio pessoal e carta de apresentação.

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** NestJS 10, TypeScript
- **API:** tRPC (tipo-seguro end-to-end)
- **Data Fetching:** TanStack Query (React Query)
- **Segurança:** Helmet, CORS
- **Storage:** Vercel KV (Redis)
- **Deploy:** Vercel (free tier)

## Estrutura

```
portfolio/
├── apps/
│   ├── web/          # Frontend NextJS
│   └── api/          # Backend NestJS
├── package.json      # Monorepo root
└── tsconfig.base.json
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar ambos (web + api)
npm run dev

# Rodar separadamente
npm run dev:web   # http://localhost:3000
npm run dev:api   # http://localhost:4000
```

## Deploy na Vercel

1. Conecte o repositório ao Vercel
2. Crie dois projetos:
   - **Web:** Root Directory = `apps/web`
   - **API:** Root Directory = `apps/api`
3. Configure as variáveis de ambiente
4. Deploy!
