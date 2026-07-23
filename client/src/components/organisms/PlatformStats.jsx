export function PlatformStats({ items }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <p className="text-xl font-semibold text-white">{item.value}</p>
          <p className="mt-1 text-sm text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
