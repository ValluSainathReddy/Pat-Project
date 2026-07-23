import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { Hero } from '../components/organisms/Hero';
import { ProjectCards } from '../components/organisms/ProjectCards';
import { projects, services, skills } from '../data/content';
import { SkillCards } from '../components/organisms/SkillCards';

export default function Home() {
  return (
    <PageShell title="Home">
      <Hero />

      <section className="py-16 lg:py-24">
        <SectionTitle eyebrow="Featured Work" title="Selected products and experiences." description="A blend of product strategy, motion design, and polished frontend execution." />
        <ProjectCards projects={projects} />
      </section>

      <section className="py-16 lg:py-24">
        <SectionTitle eyebrow="Skills" title="Tooling, frameworks, and product craft." description="A modern stack focused on execution and elegance." />
        <SkillCards skills={skills.slice(0, 4)} />
      </section>

      <section className="py-16 lg:py-24">
        <SectionTitle eyebrow="Services" title="Design systems, product experiences, and high-performance frontend." description="Focused on clarity, polish, and velocity." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
