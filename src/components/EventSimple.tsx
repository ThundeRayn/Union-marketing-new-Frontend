interface EventSimpleProps {
  id: number
  title: string
  description: string
  date: string
  time: string
  address: string
  qrCodeImage: string
}

const EventSimple = ({
  title,
  description,
  date,
  time,
  address,
  qrCodeImage
}: EventSimpleProps) => {
  return (
    <div className="border-2 border-(--color-primary)/30 my-8 mx-8 px-8 py-8 bg-(--color-secondary)">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Title and Description */}
        <div className="md:col-span-2">
          <h2
            className="text-3xl md:text-4xl font-normal text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>

          <div className="space-y-3 mb-8">
            {description.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-white/60 text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-label)' }}>
            <p className="text-sm tracking-[0.15em] uppercase text-(--color-primary)">{date}, {time}</p>
            <p className="text-xs tracking-[0.15em] uppercase text-white/50 mt-2">{address}</p>
          </div>
        </div>

        {/* Right Section - QR Code and Button */}
        <div className="flex flex-col items-center justify-start gap-6">
          <img
            src={qrCodeImage}
            alt="Event QR Code"
            className="w-48 h-48"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="w-full py-2 bg-(--color-primary) text-black rounded-none hover:bg-gray-600 hover:text-gray-400 transition-colors duration-300 group text-sm font-medium"
          >
            <span className="group-hover:hidden">More Information</span>
            <span className="hidden group-hover:inline">Event Is Over</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventSimple
