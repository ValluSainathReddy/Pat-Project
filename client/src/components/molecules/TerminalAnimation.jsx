import { motion } from 'framer-motion';

export function TerminalAnimation() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 font-mono text-sm text-slate-300 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="mt-6 space-y-2">
        <p>$ npm run dev</p>
        <p className="text-emerald-400">✔ Vite ready</p>
        <p className="text-cyan-400">✔ Portfolio shell mounted</p>
        <p className="text-fuchsia-400">✔ Motion system active</p>
      </div>
    </motion.div>
  );
}
