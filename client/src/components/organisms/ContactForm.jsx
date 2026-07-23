import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
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
    </motion.form>
  );
}
