'use client';

import { useFeeEstimates } from '@/hooks/useMempoolData';
import { formatFeeRate } from '@/lib/format';
import { Card } from '@/components/ui/Card';
import { ErrorState, LoadingState } from '@/components/ui/LoadingState';

const TIERS = [
  { key: 'fastestFee', label: 'Fastest (~10 min)' },
  { key: 'halfHourFee', label: 'Half hour' },
  { key: 'hourFee', label: 'Hour' },
  { key: 'economyFee', label: 'Economy' },
  { key: 'minimumFee', label: 'Minimum' },
] as const;

export function FeeEstimates() {
  const { data, isPending, isError } = useFeeEstimates();

  return (
    <Card title="Recommended fees">
      {isPending && <LoadingState />}
      {isError && <ErrorState message="Failed to load fee estimates." />}
      {data && (
        <ul className="divide-y divide-slate-800">
          {TIERS.map(({ key, label }) => (
            <li key={key} className="flex items-center justify-between py-2">
              <span className="text-sm text-slate-300">{label}</span>
              <span className="text-sm font-semibold tabular-nums text-slate-100">
                {formatFeeRate(data[key])}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
