import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const EventForm = () => {
  const [tapped, setTapped] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
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
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ fullName: '', phone: '', email: '' })
  }

  return (
    <div className="m-8 border-2 border-(--color-primary)/30 px-8 py-8 bg-(--color-secondary)">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 min-h-80 items-center">
        {/* Left Section - Title and Description */}
        <div className="md:col-span-3 text-center">
          <h2
            className="text-3xl md:text-4xl font-normal text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Register for 11 Altamont
          </h2>

          <p
            className="text-sm tracking-[0.15em] uppercase text-(--color-primary) mb-2"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Are You an Agent?
          </p>

          <a href="/login" className="mb-2 block text-center">
            <Button className="bg-(--color-primary) text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
              YES
            </Button>
          </a>

          <div className="space-y-1">
            <p className="text-white/60 text-base leading-relaxed">
              If <span className="font-bold text-white">YES</span>, please press 'YES' or go to Broker Portal to log in or register.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              If <span className="font-bold text-white">NO</span>, please register email for further information and updates using the form here.
            </p>
          </div>
        </div>

        {/* Right Section - Registration Form */}
        <div className="md:col-span-2 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
            <div>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full border-0 border-b border-white/30 rounded-none shadow-none text-white placeholder:text-white/40 focus:border-(--color-primary)"
              />
            </div>

            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full border-0 border-b border-white/30 rounded-none shadow-none text-white placeholder:text-white/40 focus:border-(--color-primary)"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-0 border-b border-white/30 rounded-none shadow-none text-white placeholder:text-white/40 focus:border-(--color-primary)"
              />
            </div>

            <button
              type="button"
              onClick={() => setTapped(true)}
              className={`w-full py-2 rounded-none transition-colors duration-300 text-sm font-medium mt-6 ${
                tapped
                  ? 'bg-gray-600 text-gray-400'
                  : 'bg-(--color-primary) text-black hover:bg-gray-600 hover:text-gray-400 group'
              }`}
            >
              <span className={tapped ? 'hidden' : 'group-hover:hidden'}>Register</span>
              <span className={tapped ? 'inline' : 'hidden group-hover:inline'}>Event Is Over</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EventForm
