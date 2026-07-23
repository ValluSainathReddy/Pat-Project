import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDribbble, FiMail } from 'react-icons/fi';

const links = [
  { icon: FiGithub, href: 'https://github.com' },
  { icon: FiLinkedin, href: 'https://linkedin.com' },
  { icon: FiDribbble, href: 'https://dribbble.com' },
  { icon: FiMail, href: 'mailto:hello@patricia.dev' }
];

export function SocialDock() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map(({ icon: Icon, href }) => (
        <motion.a key={href} whileHover={{ y: -2, scale: 1.03 }} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200 backdrop-blur-xl transition hover:text-white">
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}
