import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FloatingCTA() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="fixed right-6 top-24 z-[60] hidden rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-2xl lg:block">
      <Link to="/contact" className="hover:text-white">Let’s build something special →</Link>
    </motion.div>
  );
}
