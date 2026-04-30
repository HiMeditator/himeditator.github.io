import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import PixelButton from '../../components/Common/PixelButton'
import Icon from '../../components/Common/Icon'

export default function AutoCaption() {
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
            <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
              实时字幕识别与显示软件
            </p>
          </div>
        </div>

        <p className="text-lg mb-6" style={{ color: 'var(--c-text-primary)' }}>
          {project.description}
        </p>

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

      <div className="pixel-card p-6">
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
    </div>
  )
}
