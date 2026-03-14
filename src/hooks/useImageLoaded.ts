import { useState, useCallback } from 'react'

export function useImageLoaded() {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => setLoaded(true), [])
  return { loaded, onLoad }
}
