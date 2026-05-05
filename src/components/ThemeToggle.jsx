function ThemeToggle({ isDarkMode, onToggleTheme }) {
  return (
    <button
      type="button"
      onClick={onToggleTheme}
      className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;