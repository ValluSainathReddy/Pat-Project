export function TechStack({ items }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">{item}</span>
      ))}
    </div>
  );
}
