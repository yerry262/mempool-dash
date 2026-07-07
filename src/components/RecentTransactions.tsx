'use client';

import { useRecentTransactions } from '@/hooks/useMempoolData';
import { formatSats, formatVsize, truncateTxid } from '@/lib/format';
import { Card } from '@/components/ui/Card';
import { ErrorState, LoadingState } from '@/components/ui/LoadingState';

const MAX_ROWS = 8;

export function RecentTransactions() {
  const { data, isPending, isError } = useRecentTransactions();

  return (
    <Card title="Recent transactions">
      {isPending && <LoadingState />}
      {isError && <ErrorState message="Failed to load recent transactions." />}
      {data && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="pb-2 font-medium">TXID</th>
                <th className="pb-2 text-right font-medium">Value</th>
                <th className="pb-2 text-right font-medium">Size</th>
                <th className="pb-2 text-right font-medium">Fee rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {data.slice(0, MAX_ROWS).map((tx) => (
                <tr key={tx.txid}>
                  <td className="py-2 font-mono text-xs text-slate-300">
                    <a
                      href={`https://mempool.space/tx/${tx.txid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-100 hover:underline"
                    >
                      {truncateTxid(tx.txid)}
                    </a>
                  </td>
                  <td className="py-2 text-right tabular-nums text-slate-300">
                    {formatSats(tx.value)}
                  </td>
                  <td className="py-2 text-right tabular-nums text-slate-300">
                    {formatVsize(tx.vsize)}
                  </td>
                  <td className="py-2 text-right tabular-nums text-slate-300">
                    {(tx.fee / tx.vsize).toFixed(1)} sat/vB
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
