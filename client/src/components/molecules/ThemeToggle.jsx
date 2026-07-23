import { useThemeStore } from '../../store/themeStore';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200 backdrop-blur-xl"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
