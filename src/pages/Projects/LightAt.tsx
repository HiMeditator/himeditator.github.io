import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import PixelButton from '../../components/Common/PixelButton'
import Icon from '../../components/Common/Icon'

export default function LightAt() {
  const project = projects.find(p => p.id === 'light-at')!

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
            <img src="/icons/light-at.png" alt="Logo" className="w-18 h-18 object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold" style={{ color: 'var(--c-text-primary)' }}>
              {project.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
                VSCode 大模型聊天插件
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
          <a href="https://github.com/HiMeditator/light-at/releases" target="_blank" rel="noopener noreferrer">
            <img className="h-5" src="https://img.shields.io/badge/release-0.5.0-blue" alt="release" />
          </a>
          <a href="https://github.com/HiMeditator/light-at/issues" target="_blank" rel="noopener noreferrer">
            <img className="h-5" src="https://img.shields.io/github/issues/HiMeditator/light-at?color=orange" alt="issues" />
          </a>
          <img className="h-5" src="https://img.shields.io/github/languages/top/HiMeditator/light-at?color=royalblue" alt="languages" />
          <img className="h-5" src="https://img.shields.io/github/repo-size/HiMeditator/light-at?color=green" alt="repo size" />
          <img className="h-5" src="https://img.shields.io/github/stars/HiMeditator/light-at?style=social" alt="stars" />
        </div>

        <div className="flex gap-4 mb-8">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <PixelButton>
              <Icon name="GithubLogo" size={18} />
              <span style={{ marginLeft: '6px' }}>GitHub</span>
            </PixelButton>
          </a>
          <a href={project.webpage} target="_blank" rel="noopener noreferrer">
            <PixelButton variant="secondary">
              <Icon name="Package" size={18} />
              <span style={{ marginLeft: '6px' }}>VSCode 市场</span>
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
          <span>项目截图</span>
        </h2>
        <div className="pixel-checkerboard p-4 rounded-sm">
          <img
            src="/images/light-at.png"
            alt="Light At 插件截图"
            className="w-full rounded-sm"
          />
        </div>
      </div>

      <div className="pixel-card p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
          <Icon name="Code" size={24} weight="bold" />
          <span>技术栈</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Vue', 'TypeScript', 'VSCode API', 'Node.js', 'Ollama API', 'OpenAI API'].map(tech => (
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
