import { useTheme } from '../../context/ThemeContext'
import Icon from './Icon'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center border-2 border-solid border-[var(--c-text-primary)]"
      style={{
        backgroundColor: 'var(--c-accent)',
        boxShadow: 'inset -2px -2px 0 rgba(0, 0, 0, 0.2), inset 2px 2px 0 rgba(255, 255, 255, 0.1), 2px 2px 0 var(--c-text-primary)',
      }}
      title={theme === 'light' ? '切换到暗色模式' : '切换到亮色模式'}
    >
      <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={24} />
    </button>
  )
}
