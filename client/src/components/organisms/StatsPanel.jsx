export function StatsPanel({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <p className="text-2xl font-semibold text-white">{item.value}</p>
          <p className="mt-1 text-sm text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
