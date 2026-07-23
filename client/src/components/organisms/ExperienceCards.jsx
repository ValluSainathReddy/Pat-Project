export function ExperienceCards({ items }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <div key={item.company} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <p className="text-sm text-slate-400">{item.period}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
          <p className="mt-2 text-slate-300">{item.company}</p>
          <p className="mt-4 text-base leading-8 text-slate-400">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}
