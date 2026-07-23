import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { services } from '../data/content';

export default function Services() {
  return (
    <PageShell title="Services">
      <SectionTitle eyebrow="Services" title="Strategy, systems, and premium user experience." description="End-to-end support for modern digital products." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
