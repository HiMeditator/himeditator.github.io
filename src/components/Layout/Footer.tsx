import Icon from '../Common/Icon'

export default function Footer() {
  return (
    <footer className="border-t-2 border-c-border px-4 py-6 mt-8" style={{ backgroundColor: 'var(--c-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HiMeditator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            title="GitHub"
          >
            <Icon name="GithubLogo" size={28} />
          </a>
          <a
            href="https://space.bilibili.com/629971797"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            title="Bilibili"
          >
            <Icon name="YoutubeLogo" size={28} />
          </a>
          <a
            href="https://blog.csdn.net/Hi_KER"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            title="CSDN"
          >
            <Icon name="Article" size={28} />
          </a>
        </div>
        <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
          © 2025-2026 HiMeditator. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--c-text-secondary)' }}>
          Built with Vite + React + UnoCSS
        </p>
      </div>
    </footer>
  )
}
