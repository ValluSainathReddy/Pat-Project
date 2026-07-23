import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <PageShell title="Certifications">
      <SectionTitle eyebrow="Certifications" title="Professional learning and continuous growth." description="A commitment to sharpening craft and keeping pace with modern product standards." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certifications.map((item) => (
          <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <p className="text-sm text-slate-400">{item.year}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-slate-300">{item.issuer}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
