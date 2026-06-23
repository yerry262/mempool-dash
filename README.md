# Mempool-Dash

A real-time Bitcoin mempool visualization dashboard built with Next.js.

> **Project status: early scaffold.** The build tooling is not yet present —
> there is no `package.json`, Next.js config, or app code. The npm scripts
> documented below (`npm install`, `npm run dev`, `npm run build`,
> `npm run lint`, `npm run type-check`) will not run until that tooling is
> added. The only current source is the API client in `src/lib/api/` and the
> type definitions in `src/types/`.

## Features

- Live mempool statistics and transaction count
- Fee estimation visualization
- Recent transactions feed
- Block explorer integration
- Responsive design for desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mempool-dash.git
cd mempool-dash
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Recharts](https://recharts.org/) - Charts and visualizations

## API

This dashboard uses the [mempool.space API](https://mempool.space/docs/api) for Bitcoin mempool data.

## License

MIT
