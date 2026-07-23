import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { BlogCards } from '../components/organisms/BlogCards';
import { blogs } from '../data/content';

export default function Blogs() {
  return (
    <PageShell title="Blogs">
      <SectionTitle eyebrow="Blog" title="Ideas on design systems, motion, and modern product engineering." description="Notes and reflections from real product work." />
      <BlogCards posts={blogs} />
    </PageShell>
  );
}
