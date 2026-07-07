'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getBlocks,
  getFeeEstimates,
  getMempoolInfo,
  getRecentTransactions,
} from '@/lib/api/mempool';

const REFRESH_INTERVAL_MS = 10_000;

export function useMempoolInfo() {
  return useQuery({
    queryKey: ['mempool-info'],
    queryFn: getMempoolInfo,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useFeeEstimates() {
  return useQuery({
    queryKey: ['fee-estimates'],
    queryFn: getFeeEstimates,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useRecentTransactions() {
  return useQuery({
    queryKey: ['recent-transactions'],
    queryFn: getRecentTransactions,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useBlocks() {
  return useQuery({
    queryKey: ['blocks'],
    queryFn: getBlocks,
    refetchInterval: 30_000,
  });
}
