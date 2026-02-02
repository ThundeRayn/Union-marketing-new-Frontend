import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/service' },
    { label: 'EVENT', href: '/event' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'PROJECT', href: '/project' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-(--color-secondary) shadow-md">
      <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-20 pr-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
            <img 
              src="/Union-icon.png" 
              alt="Union Logo" 
              className="h-15 transition-transform duration-300 ease-in-out hover:translate-x-2"
            />
            </a>
          </div>

          {/* Navigation Links & Sign In - Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="/service" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              SERVICES
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="/event" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              EVENT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="/contact" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              CONTACT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="/project" className="relative text-(--text-inverse) hover:text-(--color-primary) text-lg group">
              PROJECT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>

            <a href="/login">
            <button 
              className="relative border border-yellow-400 text-(--text-inverse) px-5 py-2 rounded-md overflow-hidden group">
              <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
                BROKER PORTAL
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-(--text-inverse)">
                LOGIN
              </span>
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          <div className="md:hidden absolute top-20 left-0 right-0 bg-(--color-secondary) shadow-lg animate-in slide-in-from-top-2 duration-300 z-40">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-(--text-inverse) hover:text-(--color-primary) rounded-lg transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="block w-full">
                <button 
                  className="w-full px-4 py-3 border border-yellow-400 text-(--text-inverse) hover:text-(--color-primary) rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BROKER PORTAL
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar