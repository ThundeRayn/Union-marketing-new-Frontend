
import { Button } from "@/components/ui/button"

const ContactUs = () => {
  return (
    <div className="py-20 px-7 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-14 items-center">
          {/* Form */}
          <div className="md:col-span-2 pl-12 pr-8">
            <h2 className="text-6xl font-normal text-gray-900 mb-8">
              Wanna Contact Us?</h2>
            <p className="text-gray-600 mb-8 pr-12">
              Drop your message and thoughts here 
              — we’ll be in touch soon!
            </p>

            <form className="space-y-2">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition resize-none"
                  required
                />
              </div>

              {/* Are you a Realtor */}
              <div>
                <select
                  id="realtor"
                  name="realtor"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                >
                  <option value="">Are you a Realtor?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
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
              className="w-full h-[800px] object-cover rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;