'use client';

import { useMempoolInfo } from '@/hooks/useMempoolData';
import { formatBtc, formatNumber, formatVsize } from '@/lib/format';
import { StatCard } from '@/components/ui/StatCard';

export function MempoolStats() {
  const { data, isPending, isError } = useMempoolInfo();

  const placeholder = isPending ? '…' : '—';
  const errorNote = isError ? 'Unable to reach the mempool API' : undefined;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        label="Unconfirmed transactions"
        value={data ? formatNumber(data.count) : placeholder}
        sublabel={errorNote}
      />
      <StatCard
        label="Mempool size"
        value={data ? formatVsize(data.vsize) : placeholder}
        sublabel={errorNote}
      />
      <StatCard
        label="Pending fees"
        value={data ? formatBtc(data.total_fee) : placeholder}
        sublabel={errorNote}
      />
    </div>
  );
}
