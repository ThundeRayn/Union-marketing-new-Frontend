import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/service' },
    { label: 'EVENTS', href: '/event' },
    { label: 'PROJECTS', href: '/project' },
  ]

  return (
    <nav ref={navRef} className={`fixed lg:sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-(--color-secondary)/95 backdrop-blur-md shadow-lg'
        : 'bg-(--color-secondary) shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16 lg:h-20 pr-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="pl-10 flex items-center gap-3 group transition-transform duration-300 ease-in-out hover:translate-x-1">
              <img
                src="/favicon.ico"
                alt="Union Logo"
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
              <img
                src="/letter-transparent.png"
                alt="Union Text"
                className="h-8 w-45 lg:h-9 lg:w-55"
              />
            </Link>
          </div>

          {/* Navigation Links & Sign In - Right Side (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link to="/service" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              SERVICES
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link to="/event" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              EVENTS
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link to="/project" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              PROJECTS
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>

            <Link to="/login">
            <button
              className="relative border border-yellow-400 text-(--text-inverse) px-5 py-2 rounded-md overflow-hidden group">
              <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
                BROKER PORTAL
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-(--text-inverse)">
                LOGIN
              </span>
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 lg:top-20 left-0 right-0 bg-(--color-secondary) shadow-lg animate-in slide-in-from-top-2 duration-300 z-40">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-(--text-inverse) hover:text-(--color-primary) rounded-lg transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/login" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full px-4 py-3 border border-yellow-400 text-(--text-inverse) hover:text-(--color-primary) rounded-lg transition-colors duration-200 font-medium"
                >
                  BROKER PORTAL
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
