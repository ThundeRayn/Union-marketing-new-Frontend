import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const BrokerPortalLogin = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    brokerName: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      brokerName: ''
    })
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1773338113/union-login-video_zoqfff.mp4"
        onError={(e) => {
          // Fallback: hide video if it fails to load, solid bg shows through
          (e.target as HTMLVideoElement).style.display = 'none'
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
            {isLogin ? 'Sign in to unlock more' : 'Create a new account'}
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex gap-6 mb-8 border-b border-white/10">
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
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <>
              <div>
                <label
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Full Name
                </label>
                <div className="input-animated">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Broker Name
                </label>
                <div className="input-animated">
                  <Input
                    type="text"
                    name="brokerName"
                    placeholder="Your broker/company name"
                    value={formData.brokerName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                  />
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
            <div className="input-animated">
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label
                className="block text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Confirm Password
              </label>
              <div className="input-animated">
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            variant="union"
            size="union"
            className="w-full mt-2 bg-(--color-primary) text-black hover:bg-white"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-(--color-primary) hover:text-white transition-colors duration-300"
            >
              {isLogin ? 'Register here' : 'Sign in here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrokerPortalLogin
