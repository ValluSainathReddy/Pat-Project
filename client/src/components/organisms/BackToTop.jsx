import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }} whileHover={{ y: -2, scale: 1.02 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 z-[60] rounded-full border border-white/10 bg-slate-950/70 p-3 text-white shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-2xl">
      <FiArrowUp />
    </motion.button>
  );
}
