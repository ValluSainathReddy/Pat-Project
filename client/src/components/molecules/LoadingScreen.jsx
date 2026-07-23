import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-slate-200 backdrop-blur-xl">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        <span>Preparing experience…</span>
      </div>
    </motion.div>
  );
}
