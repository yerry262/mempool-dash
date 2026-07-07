# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mempool-Dash is a cryptocurrency mempool visualization dashboard built with Next.js. It displays real-time transaction data, fee estimates, and mempool statistics.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query (@tanstack/react-query) with polling for real-time updates
- **Charts**: Recharts for visualizations

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## Project Structure

```
mempool-dash/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── charts/    # Chart/visualization components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and API clients
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── tests/             # Test files
```

Global styles live in `src/app/globals.css` (Tailwind entry point).

## Development Guidelines

1. **Components**: Use functional components with TypeScript interfaces for props
2. **State Management**: Prefer React Query for server state, useState/useReducer for local state
3. **API Calls**: Centralize API logic in `src/lib/api/`
4. **Styling**: Use Tailwind CSS utility classes; avoid inline styles
5. **Types**: Define types in `src/types/` and import where needed

## API Integration

The dashboard connects to mempool APIs (e.g., mempool.space API) for:
- Current mempool statistics
- Fee estimates
- Recent transactions
- Block data

## Environment Variables

Required environment variables (create `.env.local`):
```
NEXT_PUBLIC_API_URL=https://mempool.space/api
```
