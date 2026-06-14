import { createContext, useContext } from 'react'

export interface ToastContextType {
  showToast: () => void
}

export const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export const useToast = () => useContext(ToastContext)
