export function ImageGallery() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div key={item} className="h-48 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 backdrop-blur-xl" />
      ))}
    </div>
  );
}
