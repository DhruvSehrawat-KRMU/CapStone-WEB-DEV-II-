import ThemeToggle from './ThemeToggle'

function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="mb-8 rounded-2xl border border-cyan-100 bg-white/85 p-5 shadow-lg shadow-cyan-100/40 backdrop-blur sm:p-6 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-none">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Travel Explorer
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Search, Discover & Filter Destinations
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Explore countries with real-time search, sorting, and details.
          </p>
        </div>

        <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  )
}

export default Header
