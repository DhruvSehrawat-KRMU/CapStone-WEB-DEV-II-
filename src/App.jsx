import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LoadingState from './components/LoadingState'

const HomePage = lazy(() => import('./components/HomePage'))

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-cyan-50 to-orange-50 text-slate-900 transition-colors dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.13),_transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((previousState) => !previousState)}
        />

        <Suspense fallback={<LoadingState text="Loading page..." />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<p className="mt-10 text-center">Page not found.</p>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
