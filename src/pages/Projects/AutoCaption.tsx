import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import PixelButton from '../../components/Common/PixelButton'
import Icon from '../../components/Common/Icon'
import { useTheme } from '../../context/ThemeContext'

export default function AutoCaption() {
  const { theme } = useTheme()
  const project = projects.find(p => p.id === 'auto-caption')!

  return (
    <div className="py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/projects" className="text-sm flex items-center gap-1 hover:text-c-accent transition-colors" style={{ color: 'var(--c-text-secondary)' }}>
          <Icon name="ArrowLeft" size={16} />
          <span>返回项目列表</span>
        </Link>
      </div>

      <div className="pixel-card p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div style={{ color: 'var(--c-accent)' }}>
            <img src="/icons/auto-caption.png" alt="Logo" className="w-18 h-18 object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold" style={{ color: 'var(--c-text-primary)' }}>
              {project.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
                实时字幕识别与显示软件
              </p>
              {project.startDate && (
                <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: 'var(--c-bg-secondary)', color: 'var(--c-text-secondary)' }}>
                  开始于 {project.startDate}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-lg mb-4" style={{ color: 'var(--c-text-primary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <a href="https://github.com/HiMeditator/auto-caption/releases" target="_blank" rel="noopener noreferrer">
            <img className="h-5" src="https://img.shields.io/badge/release-1.1.1-blue" alt="release" />
          </a>
          <a href="https://github.com/HiMeditator/auto-caption/issues" target="_blank" rel="noopener noreferrer">
            <img className="h-5" src="https://img.shields.io/github/issues/HiMeditator/auto-caption?color=orange" alt="issues" />
          </a>
          <img className="h-5" src="https://img.shields.io/github/languages/top/HiMeditator/auto-caption?color=royalblue" alt="languages" />
          <img className="h-5" src="https://img.shields.io/github/repo-size/HiMeditator/auto-caption?color=green" alt="repo size" />
          <a href="https://github.com/HiMeditator/auto-caption" target="_blank" rel="noopener noreferrer">
            <img className="h-5" src="https://img.shields.io/github/stars/HiMeditator/auto-caption?style=social" alt="stars" />
          </a>
        </div>

        <div className="flex gap-4 mb-8">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <PixelButton>
              <Icon name="GithubLogo" size={18} />
              <span style={{ marginLeft: '6px' }}>GitHub</span>
            </PixelButton>
          </a>
        </div>

        <div className="pixel-checkerboard p-6 rounded-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
            <Icon name="Lightning" size={24} weight="bold" />
            <span>功能特性</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span style={{ color: 'var(--c-accent)' }}><Icon name="CaretRight" size={16} /></span>
                <span style={{ color: 'var(--c-text-secondary)' }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pixel-card p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
          <Icon name="FilmSlate" size={24} weight="bold" />
          <span>项目图片</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <img
            src="/images/auto-caption.png"
            alt="Auto Caption 截图"
            className="w-full rounded-sm"
          />
          <img
            src="/images/auto-caption-structure.png"
            alt="Auto Caption 结构图"
            className="w-full rounded-sm"
          />
        </div>
      </div>

      <div className="pixel-card p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
          <Icon name="Code" size={24} weight="bold" />
          <span>技术栈</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Vue', 'Ant Design', 'Electron', 'Python', '音频处理', '音频识别'].map(tech => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded-sm"
              style={{ backgroundColor: 'var(--c-accent)', color: 'white' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pixel-card p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
          <Icon name="ChartBar" size={24} weight="bold" />
          <span>Star 历史</span>
        </h2>
        <a href="https://www.star-history.com/#HiMeditator/auto-caption&Date" target="_blank" rel="noopener noreferrer">
          <img
            className="w-full max-w-2xl rounded-sm"
            alt="Star History Chart"
            src={theme === 'dark'
              ? 'https://api.star-history.com/svg?repos=HiMeditator/auto-caption&type=Date&theme=dark'
              : 'https://api.star-history.com/svg?repos=HiMeditator/auto-caption&type=Date'
            }
          />
        </a>
      </div>
    </div>
  )
}
