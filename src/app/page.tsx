import { FeeEstimates } from '@/components/FeeEstimates';
import { FeeHistogramChart } from '@/components/charts/FeeHistogramChart';
import { LatestBlocks } from '@/components/LatestBlocks';
import { MempoolStats } from '@/components/MempoolStats';
import { RecentTransactions } from '@/components/RecentTransactions';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Mempool Dash</h1>
        <p className="mt-1 text-sm text-slate-400">
          Live Bitcoin mempool statistics, fees, and blocks — refreshed automatically.
        </p>
      </header>

      <div className="space-y-4">
        <MempoolStats />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <FeeHistogramChart className="lg:col-span-2" />
          <FeeEstimates />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <RecentTransactions />
          <LatestBlocks />
        </div>
      </div>
    </main>
  );
}
