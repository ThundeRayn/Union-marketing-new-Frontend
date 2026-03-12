interface ScrollProgressProps {
  progress: number
  label?: string
}

const ScrollProgress = ({ progress, label = 'Scroll to explore' }: ScrollProgressProps) => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex-1 max-w-xs h-px bg-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-(--color-primary)/60 transition-all duration-300 ease-out"
          style={{ width: `${Math.max(progress * 100, 5)}%` }}
        />
      </div>
      <div className="flex items-center gap-3 ml-6">
        <span
          className="text-[9px] tracking-[0.2em] uppercase text-white/30"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          {label}
        </span>
        <div className="h-6 w-px bg-(--color-primary)/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-(--color-primary) animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}

export default ScrollProgress
