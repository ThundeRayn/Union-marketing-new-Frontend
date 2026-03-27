import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  const { pathname, search, hash } = useLocation()

  // Disable browser's automatic scroll restoration before first paint
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Scroll before paint on every route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search, hash])
}

/**
 * Place this component inside <Suspense> alongside <Outlet>.
 * It fires scroll-to-top when the lazy page actually mounts
 * (after the chunk loads), not when the fallback shows.
 */
export const ScrollToTopOnMount = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default useScrollToTop
