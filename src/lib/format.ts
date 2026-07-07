// Formatting helpers for on-chain quantities.

const SATS_PER_BTC = 100_000_000;

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export function formatVsize(vsizeBytes: number): string {
  if (vsizeBytes >= 1_000_000) {
    return `${(vsizeBytes / 1_000_000).toFixed(2)} MvB`;
  }
  if (vsizeBytes >= 1_000) {
    return `${(vsizeBytes / 1_000).toFixed(1)} kvB`;
  }
  return `${vsizeBytes} vB`;
}

export function formatBtc(sats: number): string {
  return `${(sats / SATS_PER_BTC).toFixed(4)} BTC`;
}

export function formatSats(sats: number): string {
  return `${formatNumber(sats)} sats`;
}

export function formatFeeRate(satsPerVb: number): string {
  return `${satsPerVb} sat/vB`;
}

export function truncateTxid(txid: string): string {
  return `${txid.slice(0, 8)}…${txid.slice(-8)}`;
}

export function formatTimeAgo(unixSeconds: number): string {
  const seconds = Math.max(0, Math.floor(Date.now() / 1000 - unixSeconds));
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m ago`;
}
