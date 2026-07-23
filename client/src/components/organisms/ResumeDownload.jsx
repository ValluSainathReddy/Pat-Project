import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';

export function ResumeDownload() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold text-white">Download a polished PDF version of my resume.</h3>
      <p className="mt-3 max-w-2xl text-base leading-8 text-slate-400">Built for recruiters, collaborators, and teams looking for a thoughtful product engineer with systems-level depth.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button>Download Resume</Button>
        <Button variant="secondary">View Contact</Button>
      </div>
    </motion.div>
  );
}
