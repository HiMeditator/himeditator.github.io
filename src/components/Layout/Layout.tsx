import { useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main key={location.pathname} className="flex-1 px-4 py-8 pixel-page-enter">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
