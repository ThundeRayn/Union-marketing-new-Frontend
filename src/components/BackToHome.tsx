import { Link } from 'react-router-dom'

interface BackToHomeProps {
  to?: string
  label?: string
}

const BackToHome = ({ to = '/', label = 'HOME' }: BackToHomeProps) => {
  return (
    <Link
      to={to}
      className="fixed top-20 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white hover:text-(--color-primary) transition-all duration-300 ease-out"
      style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}
    >
      &larr; {label}
    </Link>
  )
}

export default BackToHome
