import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../molecules/ThemeToggle';

const links = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Projects', to: '/projects' },
  { title: 'Blog', to: '/blogs' },
  { title: 'Contact', to: '/contact' }
];

export function Navbar() {
  return (
    <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-[0.24em] text-white uppercase">Patricia</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm text-slate-300 transition hover:text-white">
              {item.title}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
