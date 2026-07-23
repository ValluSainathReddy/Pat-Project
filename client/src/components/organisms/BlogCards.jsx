export function BlogCards({ posts }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">{post.title}</h3>
          <p className="mt-3 text-base leading-8 text-slate-400">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
