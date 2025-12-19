const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-(--color-secondary) shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
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

          {/* Navigation Links & Sign In - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-(--text-inverse) hover:text-(--color-primary) transition text-lg">
              ABOUT
            </a>
            <a href="#services" className="text-(--text-inverse) hover:text-(--color-primary) transition text-lg">
              SERVICES
            </a>
            <a href="#services" className="text-(--text-inverse) hover:text-(--color-primary) transition text-lg">
              EVENT
            </a>
            <a href="#contact" className="text-(--text-inverse) hover:text-(--color-primary) transition text-lg">
              CONTACT
            </a>
            <button className="bg-(--color-primary) text-(--text-inverse) px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
              SIGN IN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar