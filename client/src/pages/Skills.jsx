import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { SkillCards } from '../components/organisms/SkillCards';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <PageShell title="Skills">
      <SectionTitle eyebrow="Skills" title="Tooling, frameworks, and product craft." description="A modern stack focused on execution and elegance." />
      <SkillCards skills={skills} />
    </PageShell>
  );
}
