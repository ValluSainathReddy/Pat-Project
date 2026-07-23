import { motion } from 'framer-motion';
import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { profile, skills } from '../data/content';

export default function About() {
  return (
    <PageShell title="About">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{profile.name}</h1>
          <p className="mt-4 text-lg text-slate-300">{profile.title}</p>
          <p className="mt-6 text-base leading-8 text-slate-400">{profile.tagline}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <SectionTitle eyebrow="Capabilities" title="Systems thinking, visual craft, and product clarity." description="I bridge design, engineering, and storytelling to build interfaces that feel effortless." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-slate-200">{skill.name}</p>
                <p className="mt-1 text-sm text-slate-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
