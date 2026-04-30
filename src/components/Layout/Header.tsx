import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../Common/ThemeToggle'

const navItems = [
  { path: '/', label: '主页' },
  { path: '/profile', label: '个人信息' },
  { path: '/projects', label: '项目列表' },
  { path: '/blogs', label: '博客列表' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-c-bg-secondary border-b-2 border-c-border px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="https://github.com/HiMeditator" className="flex items-center gap-2">
          <img src="/pixelhead.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-lg" style={{ color: 'var(--c-text-primary)' }}>
            HiMeditator
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path
            return (
              <Link
                key={path}
                to={path}
                className="transition-colors"
                style={{ color: isActive ? 'var(--c-accent)' : 'var(--c-text-secondary)' }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
