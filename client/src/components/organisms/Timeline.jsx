import { motion } from 'framer-motion';

export function Timeline({ items }) {
  return (
    <div className="mt-10 space-y-6">
      {items.map((item, index) => (
        <motion.div key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-slate-300">{item.company}</p>
            </div>
            <p className="text-sm text-slate-400">{item.period}</p>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">{item.summary}</p>
        </motion.div>
      ))}
    </div>
  );
}
