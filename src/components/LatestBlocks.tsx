'use client';

import { useBlocks } from '@/hooks/useMempoolData';
import { formatNumber, formatTimeAgo, formatVsize } from '@/lib/format';
import { Card } from '@/components/ui/Card';
import { ErrorState, LoadingState } from '@/components/ui/LoadingState';

const MAX_BLOCKS = 6;

export function LatestBlocks() {
  const { data, isPending, isError } = useBlocks();

  return (
    <Card title="Latest blocks">
      {isPending && <LoadingState />}
      {isError && <ErrorState message="Failed to load blocks." />}
      {data && (
        <ul className="divide-y divide-slate-800">
          {data.slice(0, MAX_BLOCKS).map((block) => (
            <li key={block.id} className="flex items-center justify-between py-2">
              <div>
                <a
                  href={`https://mempool.space/block/${block.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-100 hover:underline"
                >
                  #{formatNumber(block.height)}
                </a>
                <p className="text-xs text-slate-500">
                  {formatNumber(block.tx_count)} txs · {formatVsize(block.size)}
                </p>
              </div>
              <span className="text-xs tabular-nums text-slate-400">
                {formatTimeAgo(block.timestamp)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
