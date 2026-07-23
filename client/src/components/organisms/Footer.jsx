export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Patricia Chen. Crafted for elegant digital experiences.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@patricia.dev" className="transition hover:text-white">Email</a>
          <a href="/resume" className="transition hover:text-white">Resume</a>
        </div>
      </div>
    </footer>
  );
}
