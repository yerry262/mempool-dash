// Mempool API Client
// Wraps the mempool.space REST API: https://mempool.space/docs/api

import type { Block, FeeEstimate, MempoolInfo, RecentTransaction } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mempool.space/api';

export class MempoolApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly url: string,
  ) {
    super(`Mempool API request failed with status ${status}: ${url}`);
    this.name = 'MempoolApiError';
  }
}

async function fetchJson<T>(path: string): Promise<T> {
  const url = `${API_URL}${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new MempoolApiError(response.status, url);
  }
  return response.json() as Promise<T>;
}

export function getMempoolInfo(): Promise<MempoolInfo> {
  return fetchJson<MempoolInfo>('/mempool');
}

export function getFeeEstimates(): Promise<FeeEstimate> {
  return fetchJson<FeeEstimate>('/v1/fees/recommended');
}

export function getRecentTransactions(): Promise<RecentTransaction[]> {
  return fetchJson<RecentTransaction[]>('/mempool/recent');
}

export function getBlocks(): Promise<Block[]> {
  return fetchJson<Block[]>('/v1/blocks');
}
