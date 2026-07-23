import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { achievements } from '../data/content';

export default function Achievements() {
  return (
    <PageShell title="Achievements">
      <SectionTitle eyebrow="Achievements" title="Recognition that reflects depth and consistency." description="Work valued by teams, clients, and communities alike." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
