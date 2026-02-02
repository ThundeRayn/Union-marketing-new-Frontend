
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect } from "@/components/ui/native-select"
import { useState } from "react"

const ContactUs = () => {
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Show notification
    setShowNotification(true)
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
    
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <div className="py-20 px-7 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Notification */}
        {showNotification && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-[slideDownFadeIn_0.3s_ease-out]">
            Message sent successfully!
          </div>
        )}
        
        <div className="grid md:grid-cols-5 gap-14 items-center">
          {/* Form */}
          <div className="md:col-span-2 pl-12 pr-8">
            <h2 className="text-6xl font-normal text-gray-900 mb-8">
              Wanna Contact Us?</h2>
            <p className="text-gray-600 mb-8 pr-12">
              Drop your message and thoughts here 
              — we’ll be in touch soon!
            </p>

            <form className="space-y-2" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="shadow-none border-0 border-b border-gray-300 rounded-none h-12 focus-visible:ring-0 focus-visible:border-yellow-400"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="shadow-none border-0 border-b border-gray-300 rounded-none h-12 focus-visible:ring-0 focus-visible:border-yellow-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="shadow-none border-0 border-b border-gray-300 rounded-none h-12 focus-visible:ring-0 focus-visible:border-yellow-400"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="shadow-none border-0 border-b border-gray-300 rounded-none min-h-[120px] focus-visible:ring-0 focus-visible:border-yellow-400"
                  required
                />
              </div>

              {/* Are you a Realtor */}
              <div className="pb-6">
                <NativeSelect
                  id="realtor"
                  name="realtor"
                  className="shadow-none border-0 border-b border-gray-300 rounded-none h-12 focus-visible:ring-0 focus-visible:border-yellow-400"
                  required
                >
                  <option value="yes">I'm a Realtor</option>
                  <option value="no">I'm not a Realtor</option>
                </NativeSelect>
              </div>

              {/* Submit Button */}
              <div>
                <Button 
                  type="submit"
                  variant="union"
                  size="union"
                  className="w-full"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="relative md:col-span-3">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767817651/avi-waxman-f9qZuKoZYoY-unsplash_z2zx1w.jpg" 
              alt="Contact Us"
              className="w-full h-[400px] md:h-[800px] object-cover rounded-[40px] md:rounded-bl-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;