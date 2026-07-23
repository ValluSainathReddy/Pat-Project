import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail } from 'react-icons/fi';

const items = [
  { icon: FiHome, to: '/' },
  { icon: FiUser, to: '/about' },
  { icon: FiBriefcase, to: '/projects' },
  { icon: FiFileText, to: '/resume' },
  { icon: FiMail, to: '/contact' }
];

export function FloatingDock() {
  return (
    <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/70 p-2 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-2xl">
      <div className="flex items-center gap-2">
        {items.map(({ icon: Icon, to }) => (
          <Link key={to} to={to} className="rounded-full p-3 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
