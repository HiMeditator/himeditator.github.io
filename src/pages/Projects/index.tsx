import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import AnimateInView from '../../components/Common/AnimateInView'

export default function ProjectsIndex() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--c-text-primary)' }}>
        项目列表
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <AnimateInView key={project.id} stagger={index} className="h-full">
            <Link
              to={`/projects/${project.id}`}
              className="pixel-card p-6 block h-full"
            >
              <div className="flex items-start gap-4">
                <div>
                  <img src={project.iconPath} alt={project.name} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--c-text-primary)' }}>
                    {project.name}
                  </h2>
                  <p className="text-sm mb-4" style={{ color: 'var(--c-text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-sm"
                        style={{ backgroundColor: 'var(--c-bg-tertiary)', color: 'var(--c-text-secondary)' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </AnimateInView>
        ))}
      </div>
    </div>
  )
}
