import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const EventForm = () => {
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
    <div className="m-8 border-3 border-black px-8 py-2 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 min-h-80 items-center">
        {/* Left Section - Title and Description */}
        <div className="md:col-span-3 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Register for 11 Altamont
          </h2>

          <p className="text-2xl font-semibold text-gray-900 mb-2">
            Are You an Agent?
          </p>
          
          <a href="/login" className="mb-2 block text-center">
            <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300 rounded-none">
              YES
            </Button>
          </a>

          <div className="space-y-1">
            <p className="text-gray-700 text-base leading-relaxed">
              If <span className="font-bold">YES</span>, please press 'YES' or go to Broker Portal to log in or register.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              If <span className="font-bold">NO</span>, please register email for further information and updates using the form here.
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
                className="w-full border-0 border-b border-black rounded-none shadow-none focus:border-yellow-400"
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
                className="w-full border-0 border-b border-black rounded-none shadow-none focus:border-yellow-400"
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
                className="w-full border-0 border-b border-black rounded-none shadow-none focus:border-yellow-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300 rounded-none mt-6"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EventForm
