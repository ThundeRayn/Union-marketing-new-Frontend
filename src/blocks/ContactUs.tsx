import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect } from "@/components/ui/native-select"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const ContactUs = () => {
  const [showNotification, setShowNotification] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.05)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
    e.currentTarget.reset()
  }

  return (
    <div
      ref={ref}
      className="relative py-20 px-6 md:px-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-[slideDownFadeIn_0.3s_ease-out]">
          Message sent successfully!
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Gold accent line */}
        <div
          className={`w-12 h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
          }`}
        />

        {/* Heading */}
        <h2
          className={`font-serif font-normal text-3xl md:text-5xl text-white mb-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-xs tracking-[0.2em] uppercase text-white/50 mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            fontFamily: "'Staatliches', sans-serif",
            transitionDelay: '200ms',
          }}
        >
          We&rsquo;d love to hear from you
        </p>

        {/* Form */}
        <form
          className={`space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
          onSubmit={handleSubmit}
        >
          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-animated relative">
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                required
              />
            </div>
            <div className="input-animated relative">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                required
              />
            </div>
          </div>

          {/* Row 2: Email + Realtor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-animated relative">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
                required
              />
            </div>
            <div className="input-animated relative">
              <NativeSelect
                name="realtor"
                className="shadow-none bg-transparent border-0 border-b border-white/30 rounded-none h-12 text-white focus-visible:ring-0 focus-visible:border-(--color-primary)"
                required
              >
                <option value="yes" className="bg-black text-white">I'm a Realtor</option>
                <option value="no" className="bg-black text-white">I'm not a Realtor</option>
              </NativeSelect>
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="input-animated relative">
            <Textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="shadow-none bg-transparent border-0 border-b border-white/30 rounded-none min-h-[100px] text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-(--color-primary)"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="union"
              size="union"
              className="bg-[var(--color-primary)] text-black hover:bg-(--color-secondary) hover:text-white"
            >
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
