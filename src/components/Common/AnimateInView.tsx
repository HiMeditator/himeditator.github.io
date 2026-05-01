import { ReactNode, CSSProperties } from 'react'
import { useInView } from '../../hooks/useInView'

interface AnimateInViewProps {
  children: ReactNode
  stagger?: number
  className?: string
  style?: CSSProperties
}

export default function AnimateInView({
  children,
  stagger = 0,
  className = '',
  style,
}: AnimateInViewProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true })

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`pixel-animate-in ${isInView ? 'visible' : ''} ${className}`}
      style={{ '--stagger': stagger, ...style } as CSSProperties}
    >
      {children}
    </div>
  )
}
