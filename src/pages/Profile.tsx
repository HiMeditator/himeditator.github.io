import { skills } from '../data/skills'
import Icon, { iconMap } from '../components/Common/Icon'

type IconName = keyof typeof iconMap

export default function Profile() {
  const categories = [...new Set(skills.map(s => s.category))]

  const categoryIcons: Record<string, IconName> = {
    '语言': 'Code',
    '前端': 'PaintBrush',
    '后端': 'HardDrives',
    '工具': 'Wrench',
    '其他': 'Package',
    '跨平台': 'Plugs',
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
        <Icon name="User" size={32} weight="bold" />
        <span>个人介绍</span>
      </h1>

      <div className="pixel-card p-6 mb-8">
        <div className="flex items-start gap-6">
          <div style={{ color: 'var(--c-accent)' }}>
            <img src="/pixelhead.png" alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--c-text-primary)' }}>
              HiMeditator
            </h2>
            <p className="text-lg mb-2" style={{ color: 'var(--c-text-secondary)' }}>
              软件工程专业 | 研究生二年级
            </p>
            <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
              当前专注于大模型应用工程与智能体构建，并具备前端开发及跨平台开发经验。
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/HiMeditator"
                target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: 'var(--c-accent)' }}
                title="GitHub"
              >
                <Icon name="GithubLogo" size={28} />
              </a>
              <a
                href="https://space.bilibili.com/629971797"
                target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: 'var(--c-accent)' }}
                title="Bilibili"
              >
                <Icon name="YoutubeLogo" size={28} />
              </a>
              <a
                href="https://blog.csdn.net/Hi_KER"
                target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: 'var(--c-accent)' }}
                title="CSDN"
              >
                <Icon name="Article" size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pixel-card p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
          <Icon name="ChartBar" size={24} weight="bold" />
          <span>GitHub 统计</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="pixel-checkerboard p-4 text-center min-w-32">
            <div className="text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>~20</div>
            <div className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>Repositories</div>
          </div>
          <div className="pixel-checkerboard p-4 text-center min-w-32">
            <div className="text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>500+</div>
            <div className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>Stars</div>
          </div>
          <div className="pixel-checkerboard p-4 text-center min-w-32">
            <div className="text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>300+</div>
            <div className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>Commits</div>
          </div>
          <div className="pixel-checkerboard p-4 text-center min-w-32">
            <div className="text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>10+</div>
            <div className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>Pull Requests</div>
          </div>
          <div className="pixel-checkerboard p-4 text-center min-w-32">
            <div className="text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>TypeScript</div>
            <div className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>Most Used Language</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map(category => (
          <div key={category} className="pixel-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
              <Icon name={categoryIcons[category] || 'Package'} size={24} weight="bold" />
              <span>{category}</span>
            </h2>
            <div className="space-y-3">
              {skills.filter(s => s.category === category).map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium" style={{ color: 'var(--c-text-primary)' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-c-bg-tertiary rounded-sm overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: 'var(--c-accent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
