import { useEffect, useMemo, useRef } from 'react'

interface Particle {
  id: number
  x: string
  y: string
  size: number
  duration: number
  delay: number
  driftX: number
  driftY: number
  opacity: number
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${60 + Math.random() * 40}%`,
    size: 4 + Math.floor(Math.random() * 6),
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 8,
    driftX: -30 + Math.random() * 60,
    driftY: -(150 + Math.random() * 150),
    opacity: 0.2 + Math.random() * 0.3,
  }))
}

export default function PixelParticles() {
  const particles = useMemo(() => generateParticles(24), [])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleVisibility = () => {
      container.style.animationPlayState = document.hidden ? 'paused' : 'running'
      // Pause all child animations
      container.querySelectorAll<HTMLElement>('.pixel-particle').forEach(el => {
        el.style.animationPlayState = document.hidden ? 'paused' : 'running'
      })
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  return (
    <div ref={containerRef}>
      {particles.map(p => (
        <div
          key={p.id}
          className="pixel-particle"
          style={{
            '--x': p.x,
            '--y': p.y,
            '--size': `${p.size}px`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            '--particle-opacity': p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
