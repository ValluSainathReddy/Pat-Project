import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { education } from '../data/content';

export default function Education() {
  return (
    <PageShell title="Education">
      <SectionTitle eyebrow="Education" title="A foundation in product, systems, and technology." description="Academic and applied learning that shaped the way I build." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <p className="text-sm text-slate-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 text-slate-300">{item.school}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
