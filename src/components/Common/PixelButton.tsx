import { ReactNode, ButtonHTMLAttributes } from 'react'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function PixelButton({ children, variant = 'primary', className = '', ...props }: PixelButtonProps) {
  return (
    <button
      className={`pixel-btn ${variant === 'secondary' ? 'bg-c-bg-secondary text-c-text-primary border-c-border' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}