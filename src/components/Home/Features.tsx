import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import AnimateInView from '../Common/AnimateInView'

export default function Features() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--c-text-primary)' }}>
        个人项目
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <AnimateInView key={project.id} stagger={index} className="h-full">
            <Link
              to={`/projects/${project.id}`}
              className="pixel-card p-6 block h-full"
            >
              <div className="mb-4">
                <img src={project.iconPath} alt={project.name} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--c-text-primary)' }}>
                {project.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
                {project.description.slice(0, 60)}...
              </p>
            </Link>
          </AnimateInView>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/projects" className="pixel-btn inline-block">
          <span>查看全部项目</span>
        </Link>
      </div>
    </section>
  )
}
