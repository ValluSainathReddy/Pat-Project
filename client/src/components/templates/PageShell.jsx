import { motion } from 'framer-motion';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { AnimatedBackground } from '../molecules/AnimatedBackground';
import { Cursor } from '../molecules/Cursor';
import { useLenis } from '../../hooks/useLenis';
import { FloatingDock } from '../organisms/FloatingDock';
import { FloatingCTA } from '../organisms/FloatingCTA';
import { ProgressBar } from '../organisms/ProgressBar';
import { BackToTop } from '../organisms/BackToTop';

export function PageShell({ children, title }) {
  useLenis();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatedBackground />
      <Cursor />
      <ProgressBar />
      <Navbar />
      <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">{children}</div>
      </motion.main>
      <FloatingCTA />
      <FloatingDock />
      <BackToTop />
      <Footer />
    </div>
  );
}
