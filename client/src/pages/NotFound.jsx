import { Link } from 'react-router-dom';
import { PageShell } from '../components/templates/PageShell';

export default function NotFound() {
  return (
    <PageShell title="404">
      <div className="rounded-[2rem] border border-white/10 bg-white/10 p-16 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">The page you’re looking for does not exist.</h1>
        <Link to="/" className="mt-8 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-slate-100">Back Home</Link>
      </div>
    </PageShell>
  );
}
