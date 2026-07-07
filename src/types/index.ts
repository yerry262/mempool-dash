// Mempool API Types
// Shapes mirror the mempool.space REST API: https://mempool.space/docs/api

export interface MempoolInfo {
  count: number;
  vsize: number;
  total_fee: number;
  /** Pairs of [feeRate (sat/vB), vsize] buckets, highest fee rate first. */
  fee_histogram: [number, number][];
}

export interface FeeEstimate {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
  economyFee: number;
  minimumFee: number;
}

export interface RecentTransaction {
  txid: string;
  fee: number;
  vsize: number;
  value: number;
}

export interface Block {
  id: string;
  height: number;
  timestamp: number;
  tx_count: number;
  size: number;
  weight: number;
  extras?: {
    medianFee?: number;
    totalFees?: number;
    pool?: {
      name: string;
    };
  };
}
