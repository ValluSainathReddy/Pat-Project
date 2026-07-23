import { motion } from 'framer-motion';

export function ProjectCards({ projects }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <div className="h-40 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20" />
          <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
