import { useEffect, useRef } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'

interface TypewriterProps {
  text: string
  speed?: number
  startDelay?: number
  className?: string
  cursor?: boolean
  onComplete?: () => void
}

export default function Typewriter({
  text,
  speed = 80,
  startDelay = 0,
  className,
  cursor = true,
  onComplete,
}: TypewriterProps) {
  const { displayedText, isDone } = useTypewriter(text, { speed, startDelay })
  const hasFired = useRef(false)

  useEffect(() => {
    if (isDone && onComplete && !hasFired.current) {
      hasFired.current = true
      onComplete()
    }
  }, [isDone, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="pixel-cursor" />}
    </span>
  )
}
