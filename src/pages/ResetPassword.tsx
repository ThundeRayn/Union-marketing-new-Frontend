import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useIsMobile from '@/hooks/useIsMobile'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
)

const ResetPassword = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [sessionReady, setSessionReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [codeError, setCodeError] = useState<string | null>(null)

  const code = new URLSearchParams(window.location.search).get('code')

  useEffect(() => {
    if (!code) return
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      if (error) {
        setCodeError('This reset link has expired. Please request a new one.')
        return
      }
      setSessionReady(true)
    })
  }, [code])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' })
      return
    }
    if (password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters.' })
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (error) {
      setMessage({ type: 'error', text: error.message })
      return
    }
    setMessage({ type: 'success', text: 'Password updated! Redirecting to sign in…' })
    setTimeout(() => navigate('/login', { replace: true }), 2000)
  }

  const bgImage = isMobile
    ? 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777108265/building_outside_street_q1ncta.png)'
    : 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg)'

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: bgImage }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="h-px w-12 bg-(--color-primary)" />
          </div>
          <h1
            className="text-3xl md:text-4xl font-normal text-white mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Broker Portal
          </h1>
          <p
            className="text-sm tracking-[0.15em] uppercase text-(--color-primary)"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Choose a new password
          </p>
        </div>

        {(!code || codeError) ? (
          <div className="text-center space-y-6">
            <p className="text-red-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {!code ? 'Invalid or expired reset link. Please request a new one.' : codeError}
            </p>
            <button
              onClick={() => navigate('/login')}
              className="text-xs tracking-[0.15em] uppercase text-(--color-primary) hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Back to sign in
            </button>
          </div>
        ) : !sessionReady ? (
          <p
            className="text-center text-white/40 text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Verifying link…
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary) pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-2"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Confirm New Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary) pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowConfirmPassword(v => !v)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-2"
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            {message && (
              <p
                className={`text-sm text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {message.text}
              </p>
            )}

            <Button
              type="submit"
              variant="union"
              size="union"
              disabled={loading}
              className="w-full mt-2 bg-(--color-theme-light) text-black hover:bg-(--color-secondary) hover:text-white disabled:opacity-50"
            >
              {loading ? 'Updating…' : 'Update Password'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
