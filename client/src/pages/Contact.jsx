import { useForm } from 'react-hook-form';
import { PageShell } from '../components/templates/PageShell';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { Button } from '../components/atoms/Button';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <PageShell title="Contact">
      <SectionTitle eyebrow="Contact" title="Let’s create something memorable." description="Open for new collaborations, product launches, and thoughtful interfaces." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <p className="text-slate-300">Email</p>
          <a href="mailto:hello@patricia.dev" className="mt-2 block text-xl font-semibold text-white">hello@patricia.dev</a>
          <p className="mt-6 text-slate-400">Based globally and available for remote collaborations.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input {...register('name')} className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input {...register('email')} className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none" />
            </label>
          </div>
          <label className="mt-4 block text-sm text-slate-300">
            <span className="mb-2 block">Message</span>
            <textarea {...register('message')} rows="6" className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none" />
          </label>
          <div className="mt-6">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </PageShell>
  );
}
