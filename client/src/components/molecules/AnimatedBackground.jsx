export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.18),transparent_30%),linear-gradient(135deg,#04070b_0%,#0a1017_45%,#05070b_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="absolute left-[-10%] top-[-15%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[140px]" />
    </div>
  );
}
