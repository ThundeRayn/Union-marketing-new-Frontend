import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
    // Handle login/register logic here
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      brokerName: ''
    })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Broker Portal</h1>
          <p className="text-gray-600">
            {isLogin ? 
            'Have an account already? Sign in to unlock more'
             : 'Create a new account'}</p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setIsLogin(true)}
            className={`pb-4 font-semibold transition-colors ${
              isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`pb-4 font-semibold transition-colors ${
              !isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Broker Name</label>
                <Input
                  type="text"
                  name="brokerName"
                  placeholder="Your broker/company name"
                  value={formData.brokerName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-300"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-black font-semibold hover:text-yellow-400 transition-colors"
              >
                Register here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-black font-semibold hover:text-yellow-400 transition-colors"
              >
                Sign in here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BrokerPortalLogin
