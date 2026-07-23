import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { Button } from '../components/atoms/Button';

export default function Resume() {
  return (
    <PageShell title="Resume">
      <SectionTitle eyebrow="Resume" title="A concise professional overview." description="Download a PDF version for offline review or sharing." />
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
        <h3 className="text-2xl font-semibold text-white">Patricia Chen</h3>
        <p className="mt-3 text-slate-300">Senior Product Engineer · UI Systems Designer · Motion Enthusiast</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button>Download Resume</Button>
          <Button variant="secondary">Contact Me</Button>
        </div>
      </div>
    </PageShell>
  );
}
