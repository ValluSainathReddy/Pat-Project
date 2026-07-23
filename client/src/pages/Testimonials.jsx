import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <PageShell title="Testimonials">
      <SectionTitle eyebrow="Testimonials" title="Trusted by teams building ambitious products." description="The kind of feedback that says the experience felt memorable and intentional." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
            <p className="mt-6 font-semibold text-white">{item.name}</p>
            <p className="text-sm text-slate-400">{item.role}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
