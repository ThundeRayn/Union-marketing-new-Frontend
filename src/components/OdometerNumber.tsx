import { useEffect, useState } from 'react'

// Single digit column — pure CSS transition, no JS ticking
const OdometerDigit = ({
  strip,
  targetIndex,
  duration,
  delay,
  started,
}: {
  strip: number[]
  targetIndex: number
  duration: number
  delay: number
  started: boolean
}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => setScrolled(true), delay)
    return () => clearTimeout(timer)
  }, [started, delay])

  return (
    <span
      className="inline-block relative overflow-hidden"
      style={{ height: '1.15em', width: '0.65em', padding: '0.075em 0' }}
    >
      <span
        className="block"
        style={{
          transform: scrolled ? `translateY(-${targetIndex * 1.15}em)` : 'translateY(0)',
          transition: scrolled ? `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : 'none',
        }}
      >
        {strip.map((d, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1.15em', lineHeight: '1.15em' }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  )
}

// Orchestrates digit columns for a full number
interface OdometerNumberProps {
  target: number
  startFrom: number
  duration?: number
  delay?: number
  started: boolean
  suffix?: string
}

const OdometerNumber = ({
  target,
  startFrom,
  duration = 2000,
  delay = 0,
  started,
  suffix = '',
}: OdometerNumberProps) => {
  const targetTens = Math.floor(target / 10)
  const startTens = Math.floor(startFrom / 10)
  const startUnits = startFrom % 10

  // Build units strip
  const unitsStrip: number[] = [startUnits]
  let d = startUnits
  const totalUnitsSteps = target - startFrom
  for (let i = 0; i < totalUnitsSteps; i++) {
    d = (d + 1) % 10
    unitsStrip.push(d)
  }

  // Build tens strip
  const tensStrip: number[] = []
  for (let t = startTens; t <= targetTens; t++) {
    tensStrip.push(t)
  }

  return (
    <span className="inline-flex">
      <OdometerDigit
        strip={tensStrip}
        targetIndex={tensStrip.length - 1}
        duration={duration}
        delay={delay + 150}
        started={started}
      />
      <OdometerDigit
        strip={unitsStrip}
        targetIndex={unitsStrip.length - 1}
        duration={duration}
        delay={delay}
        started={started}
      />
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

export default OdometerNumber
