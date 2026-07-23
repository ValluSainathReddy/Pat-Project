import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { Timeline } from '../components/organisms/Timeline';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <PageShell title="Experience">
      <SectionTitle eyebrow="Experience" title="A track record shaped by high-impact product work." description="Focused on leadership, craft, and world-class execution." />
      <Timeline items={experiences} />
    </PageShell>
  );
}
