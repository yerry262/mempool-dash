'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useMempoolInfo } from '@/hooks/useMempoolData';
import { Card } from '@/components/ui/Card';
import { ErrorState, LoadingState } from '@/components/ui/LoadingState';

// Single-series magnitude chart: one hue, validated for dark surfaces.
const BAR_COLOR = '#3987e5';
const GRID_COLOR = '#2c2c2a';
const AXIS_COLOR = '#898781';

// Upper bounds (sat/vB) of the display buckets the raw histogram is folded into.
const BUCKET_BOUNDS = [2, 3, 5, 10, 20, 50, 100, Infinity];

function bucketLabel(index: number): string {
  const lower = index === 0 ? 1 : BUCKET_BOUNDS[index - 1];
  const upper = BUCKET_BOUNDS[index];
  return upper === Infinity ? `${lower}+` : `${lower}–${upper}`;
}

function toBuckets(histogram: [number, number][]) {
  const totals = BUCKET_BOUNDS.map(() => 0);
  for (const [feeRate, vsize] of histogram) {
    const index = BUCKET_BOUNDS.findIndex((bound) => feeRate < bound);
    totals[index === -1 ? totals.length - 1 : index] += vsize;
  }
  return totals.map((vsize, index) => ({
    range: bucketLabel(index),
    mvb: vsize / 1_000_000,
  }));
}

export function FeeHistogramChart({ className }: { className?: string }) {
  const { data, isPending, isError } = useMempoolInfo();

  return (
    <Card title="Mempool by fee rate (sat/vB)" className={className}>
      {isPending && <LoadingState />}
      {isError && <ErrorState message="Failed to load the fee histogram." />}
      {data && (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={toBuckets(data.fee_histogram)} barCategoryGap="20%">
              <CartesianGrid stroke={GRID_COLOR} strokeDasharray="0" vertical={false} />
              <XAxis
                dataKey="range"
                stroke={AXIS_COLOR}
                tick={{ fill: AXIS_COLOR, fontSize: 12 }}
                tickLine={false}
              />
              <YAxis
                stroke={AXIS_COLOR}
                tick={{ fill: AXIS_COLOR, fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                width={44}
                tickFormatter={(value: number) => `${value.toFixed(1)}`}
                label={{
                  value: 'MvB',
                  angle: -90,
                  position: 'insideLeft',
                  fill: AXIS_COLOR,
                  fontSize: 12,
                }}
              />
              <Tooltip
                cursor={{ fill: 'rgba(255, 255, 255, 0.06)' }}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '0.5rem',
                  color: '#f1f5f9',
                  fontSize: 12,
                }}
                formatter={(value: number) => [`${value.toFixed(2)} MvB`, 'Pending vsize']}
                labelFormatter={(label) => `${label} sat/vB`}
              />
              <Bar dataKey="mvb" fill={BAR_COLOR} radius={[4, 4, 0, 0]} maxBarSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
