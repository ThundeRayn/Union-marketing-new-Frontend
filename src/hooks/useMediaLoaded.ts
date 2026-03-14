import { useState, useEffect } from 'react'

export function useMediaLoaded(src: string | undefined) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!src) return
    setLoaded(false)
    const img = new Image()
    img.onload = () => setLoaded(true)
    img.src = src
    if (img.complete) setLoaded(true)
  }, [src])

  return loaded
}
