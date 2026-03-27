import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface Client {
  name: string
  logo: string
}

interface MarqueeLogosProps {
  clients: Client[]
  duration?: number  // seconds per full cycle
  offset?: number    // how many items to skip at start (shifts animation position)
  className?: string
}

function LogoItem({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-32 h-32">
      {!loaded && <Skeleton className="absolute inset-0 rounded-md" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-32 h-32 object-contain brightness-0 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-500 ${loaded ? '' : 'opacity-0'}`}
      />
    </div>
  )
}

const MarqueeLogos = ({ clients, duration = 18, offset = 0, className }: MarqueeLogosProps) => {
  // Negative delay shifts the animation forward so it appears to start at a different item
  const delay = -((offset / clients.length) * duration)

  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <div
        className="flex"
        style={{
          width: 'max-content',
          animation: `marquee ${duration}s linear ${delay}s infinite`,
        }}
      >
        {/* Original set + duplicate for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8"
            aria-hidden={index >= clients.length}
          >
            <LogoItem src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeLogos
