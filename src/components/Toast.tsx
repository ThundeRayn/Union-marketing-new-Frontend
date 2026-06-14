import { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ToastContextType {
  showToast: () => void
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(true)
    timerRef.current = setTimeout(() => setVisible(false), 2500)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <div
            className="bg-(--color-secondary) border-l-2 border-l-(--color-primary) border border-white/10 px-8 py-4 flex flex-col items-start gap-1 shadow-2xl min-w-[220px]"
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-(--color-primary)"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Coming Soon
            </p>
            <p
              className="text-[10px] text-white/40 tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Stay tuned for updates
            </p>
          </div>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}
