import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useIsMobile from '@/hooks/useIsMobile'
import { api } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'

const BrokerPortalLogin = () => {
  const [isLogin, setIsLogin] = useState(true)
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })
  const [isRealtor, setIsRealtor] = useState<boolean | null>(null)
  const [isForgot, setIsForgot] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)

    try {
      if (!isLogin) {
        if (formData.password !== formData.confirmPassword) {
          setMessage({ type: 'error', text: 'Passwords do not match.' })
          return
        }
        if (isRealtor === null) {
          setMessage({ type: 'error', text: 'Please select whether you are a Realtor.' })
          return
        }
        await api.signup({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          isRealtor,
        })
        setMessage({ type: 'success', text: 'Account created! Check your email to verify your account.' })
        setFormData({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' })
        setIsRealtor(null)
      } else {
        await login(formData.email, formData.password)
        navigate('/broker-portal', { replace: true })
      }
    } catch (err: any) {
      const raw: string = err.message ?? ''
      const r = raw.toLowerCase()
      let text = 'Something went wrong. Please try again.'

      if (isLogin) {
        if (raw === 'EMAIL_NOT_CONFIRMED') {
          text = 'Your email hasn\'t been verified yet. Check your inbox for the verification link.'
        } else if (r.includes('no account found')) {
          text = 'No account found with that email address, please register first.'
        } else if (r.includes('incorrect password')) {
          text = 'Incorrect password. Please try again.'
        } else if (r.includes('too many')) {
          text = 'Too many sign-in attempts. Please wait a moment and try again.'
        } else if (raw) {
          text = raw
        }
      } else {
        if (r.includes('already registered') || r.includes('already exists')) {
          text = 'An account with this email already exists. Try signing in instead.'
        } else if (r.includes('database error') || r.includes('server configuration')) {
          text = 'Registration failed due to a server error. Please contact support.'
        } else if (r.includes('password should be') || r.includes('password must')) {
          text = 'Password must be at least 6 characters long.'
        } else if (r.includes('invalid email') || r.includes('valid email')) {
          text = 'Please enter a valid email address.'
        } else if (raw) {
          text = raw
        }
      }

      setMessage({ type: 'error', text })
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    try {
      await api.forgotPassword(forgotEmail)
      setMessage({ type: 'success', text: 'Reset link sent! Check your inbox.' })
      setForgotEmail('')
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4">
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: isMobile
          ? 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777108265/building_outside_street_q1ncta.png)'
          : 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg)'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
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
            {isForgot ? 'Reset your password' : isLogin ? 'Sign in to unlock more' : 'Create a new account'}
          </p>
        </div>

        {/* Toggle Tabs */}
        {!isForgot && <div className="flex gap-6 mb-8 border-b border-white/10">
          <button
            onClick={() => setIsLogin(true)}
            className={`pb-3 text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
              isLogin
                ? 'text-(--color-primary) border-b-2 border-(--color-primary)'
                : 'text-white/40 border-b-2 border-transparent hover:text-white/60'
            }`}
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`pb-3 text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
              !isLogin
                ? 'text-(--color-primary) border-b-2 border-(--color-primary)'
                : 'text-white/40 border-b-2 border-transparent hover:text-white/60'
            }`}
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Register
          </button>
        </div>}

        {/* Forgot Password Form */}
        {isForgot && (
          <form onSubmit={handleForgotPassword} className="space-y-5">
            <div>
              <label
                className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Email
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                required
                className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
              />
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
              {loading ? 'Sending…' : 'Send Reset Link'}
            </Button>
          </form>
        )}

        {/* Login / Register Form */}
        {!isForgot && <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    First Name
                  </label>
                  <div className="input-animated">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Last Name
                  </label>
                  <div className="input-animated">
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-3"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Are you a Realtor?
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsRealtor(true)}
                    className={`flex-1 py-2.5 text-xs tracking-[0.15em] uppercase border transition-colors duration-200 ${
                      isRealtor === true
                        ? 'border-(--color-primary) bg-(--color-primary) text-black'
                        : 'border-white/30 text-white/50 hover:border-white/60 hover:text-white/80'
                    }`}
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRealtor(false)}
                    className={`flex-1 py-2.5 text-xs tracking-[0.15em] uppercase border transition-colors duration-200 ${
                      isRealtor === false
                        ? 'border-(--color-primary) bg-(--color-primary) text-black'
                        : 'border-white/30 text-white/50 hover:border-white/60 hover:text-white/80'
                    }`}
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    No
                  </button>
                </div>
              </div>
            </>
          )}

          <div>
            <label
              className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Email
            </label>
            <div className="input-animated">
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Password
            </label>
            <div className="input-animated relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
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

          {isLogin && (
            <div className="text-right -mt-2">
              <button
                type="button"
                onClick={() => { setIsForgot(true); setMessage(null) }}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Forgot password?
              </button>
            </div>
          )}

          {!isLogin && (
            <div>
              <label
                className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Confirm Password
              </label>
              <div className="input-animated relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
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
          )}

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
            {loading ? 'Please wait…' : isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {isForgot ? (
              <>
                Remembered it?{' '}
                <button
                  onClick={() => { setIsForgot(false); setMessage(null) }}
                  className="text-(--color-primary) hover:text-white transition-colors duration-300"
                >
                  Back to sign in
                </button>
              </>
            ) : isLogin ? (
              <>
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-(--color-primary) hover:text-white transition-colors duration-300"
                >
                  Register here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-(--color-primary) hover:text-white transition-colors duration-300"
                >
                  Sign in here
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrokerPortalLogin
