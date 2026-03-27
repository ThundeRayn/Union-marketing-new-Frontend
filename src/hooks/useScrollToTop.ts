import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  const { pathname, search, hash } = useLocation()

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Scroll before paint
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, search, hash])
}

/**
 * Place this component inside <Suspense> alongside <Outlet>.
 * It fires scroll-to-top when the lazy page actually mounts
 * (after the chunk loads), not when the fallback shows.
 */
export const ScrollToTopOnMount = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])
  return null
}

export default useScrollToTop
