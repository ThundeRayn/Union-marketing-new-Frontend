import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0)
    
    // Also try with a small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname, search, hash])
}

export default useScrollToTop
