import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { profile, stats } from '../../data/content';
import { StatsPanel } from './StatsPanel';

export function Hero() {
  return (
    <section className="grid items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">Available for select product collaborations</div>
        <div className="space-y-5">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Designing premium experiences for the modern web.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-400">{profile.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button>View Projects</Button>
          <Button variant="secondary">Download Resume</Button>
        </div>
        <StatsPanel items={stats} />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-2xl">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current focus</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Building fluid design systems with cinematic interaction.</h2>
          <div className="mt-8 space-y-4">
            {profile.stats.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <span className="text-slate-200">{item.label}</span>
                <span className="text-sm text-slate-400">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
