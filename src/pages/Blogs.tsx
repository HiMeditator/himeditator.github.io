import { blogs } from '../data/blogs'
import Icon from '../components/Common/Icon'

export default function Blogs() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2" style={{ color: 'var(--c-text-primary)' }}>
        <Icon name="Article" size={32} weight="bold" />
        <span>博客列表</span>
      </h1>

      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-card p-6 block hover:no-underline"
          >
            <div className="flex items-start gap-4">
              <div style={{ color: 'var(--c-accent)' }}>
                <Icon name="FileText" size={32} weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--c-text-primary)' }}>
                  {blog.title}
                </h2>
                <p className="text-sm mb-2" style={{ color: 'var(--c-text-secondary)' }}>
                  {blog.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs px-2 py-1 rounded-sm" style={{ backgroundColor: 'var(--c-bg-tertiary)', color: 'var(--c-text-secondary)' }}>
                    {blog.date}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--c-accent)' }}>
                    查看全文
                    <Icon name="CaretRight" size={12} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm" style={{ color: 'var(--c-text-secondary)' }}>
          更多内容请访问我的 CSDN 博客
        </p>
        <a
          href="https://blog.csdn.net/Hi_KER"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn inline-block mt-4"
        >
          <span>访问 CSDN</span>
          <Icon name="CaretRight" size={16} />
        </a>
      </div>
    </div>
  )
}
