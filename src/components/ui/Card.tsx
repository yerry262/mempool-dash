interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <section
      className={`rounded-xl border border-slate-800 bg-slate-900 p-4 ${className ?? ''}`}
    >
      <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
