import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-white text-slate-950 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.12)]',
    secondary: 'border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20',
    ghost: 'bg-transparent text-slate-300 hover:text-white'
  };

  return (
    <motion.button whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </motion.button>
  );
}
