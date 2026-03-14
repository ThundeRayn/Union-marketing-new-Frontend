import { useState, useEffect } from 'react'

export function useMediaLoaded(src: string | undefined) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!src) return
    setTimeout(() => setLoaded(false), 0)
    const img = new Image()
    img.onload = () => setLoaded(true)
    img.src = src
    if (img.complete) {
      setTimeout(() => setLoaded(true), 0)
    }
  }, [src])

  return loaded
}
