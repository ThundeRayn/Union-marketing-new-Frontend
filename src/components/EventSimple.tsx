import { Button } from '@/components/ui/button'

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
  id,
  title,
  description,
  date,
  time,
  address,
  qrCodeImage
}: EventSimpleProps) => {
  return (
    <div className="border-black border-3 my-8 mx-8 px-8 py-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Title and Description */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          <div className="space-y-3 mb-8">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-base leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div className="text-lg font-semibold text-gray-900">
            <p>{date}, {time}</p>
            <p className="text-gray-600 mt-2">{address}</p>
          </div>
        </div>

        {/* Right Section - QR Code and Button */}
        <div className="flex flex-col items-center justify-start gap-6">
          <img 
            src={qrCodeImage}
            alt="Event QR Code"
            className="w-48 h-48 border-gray-300"
          />
          
          <a href="#" className="w-full">
            <Button className="w-full bg-black text-white hover:bg-yellow-400 hover:text-black rounded-none transition-colors duration-300">
              More Information
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventSimple
