export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 w-40 rounded-full bg-white/10" />
      <div className="h-4 w-3/4 rounded-full bg-white/10" />
      <div className="h-4 w-2/3 rounded-full bg-white/10" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-40 rounded-[1.5rem] bg-white/10" />
        <div className="h-40 rounded-[1.5rem] bg-white/10" />
        <div className="h-40 rounded-[1.5rem] bg-white/10" />
      </div>
    </div>
  );
}
