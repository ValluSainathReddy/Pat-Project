import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { ProjectCards } from '../components/organisms/ProjectCards';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <PageShell title="Projects">
      <SectionTitle eyebrow="Projects" title="A portfolio rooted in impact and detail." description="Selected work spanning product design, systems, and interactive storytelling." />
      <ProjectCards projects={projects} />
    </PageShell>
  );
}
