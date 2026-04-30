import { Link } from 'react-router-dom'
import PixelButton from '../Common/PixelButton'

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 pixel-checkerboard">
      <div className="inline-block mb-6">
        <img src="/pixelhead.png" alt="Logo" className="w-24 h-24 object-contain" />
      </div>
      <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--c-text-primary)' }}>
        HiMeditator
      </h1>
      <p className="text-xl mb-2" style={{ color: 'var(--c-text-secondary)' }}>
        Agent开发 | 开源开发者 | 软件工程专业
      </p>
      <p className="text-lg mb-8" style={{ color: 'var(--c-text-secondary)' }}>
        "Code is cheap, show me the prompt."
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/profile">
          <PixelButton>了解更多</PixelButton>
        </Link>
        <Link to="/projects">
          <PixelButton variant="secondary">查看项目</PixelButton>
        </Link>
      </div>
    </section>
  )
}
