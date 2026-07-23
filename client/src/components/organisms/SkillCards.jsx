export function SkillCards({ skills }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {skills.map((skill) => (
        <div key={skill.name} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{skill.category}</p>
          <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{skill.level}</p>
        </div>
      ))}
    </div>
  );
}
