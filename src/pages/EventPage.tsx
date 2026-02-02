
import EventRich from '@/components/EventRich'
import EventSimple from '@/components/EventSimple'
import EventForm from '@/components/EventForm'
import EventSell from '@/components/EventSell'

const EventPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Events Container */}
      <div className="w-full">
        {/* Events Grid */}
        <div className="space-y-0">
          {/* Event 1 */}
          <EventRich
            id={1}
            title="PHASE TWO: LIVE IN LUXURY DRIVE IN STYLE"
            description="Buy a unit and receive a TESLA MODEL Y with your own EV CHARGING STATION!"
            date="June 15th"
            time="12 PM - 5 PM"
            address="139 Main St., #206, Unionville, Markham L3R 2G6"
            backgroundImage="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770003166/Courtyard-at-Eleven-Altamont-Towns-7-v60_mcgh7r.jpg"
          />

          {/* Event 1.5 - Legal Guidance Webinar */}
          <EventSimple
            id={1.5}
            title="Share Insider Tips on Home Buying Event"
            description="Do You Need Legal Guidance When Purchasing Pre-construction Properties? Key Legal Considerations for Pre-Construction Home Buyers. Understanding the Risks Associated with Pre-Construction Property Investments.What is suitable for you? Pre-Construction or Resale Property?"
            date="May 11th"
            time="12:00 PM"
            address="11 Altamont Rd, North York, M2M 1S5"
            qrCodeImage="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770004838/cropped-favicon_bbny06.png"
          />

          {/* Event 2 */}
          <EventRich
            id={2}
            title="Renowned Industry Expert Lawyer Liu Yan"
            description="Share Insider Tips on Home Buying!"
            date="May 11th"
            time="12:00 pm"
            address="11 altamont rd, North york, M2M 1S5"
            backgroundImage="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770005204/open2-1024x724-1_pnlomi.jpg"
          />

          {/* Event Form - Registration */}
          <EventForm />

          {/* Event 3 */}
          <EventSell
            id={3}
            title="LUXURY TOWNHOMES PRECONSTRUCTION"
            description="11 ALTAMONT ROAD (NEAR YONGE & FINCH)"
            button="NOW SELLING"
            hover="VIEW MORE"
            link="/project"
            backgroundImage="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770006161/Eleven-Altamont-TownsMain1Featured_so3pio.jpg"
          />

          {/* Add more EventRich or other event components here */}
        </div>
      </div>
    </div>
  )
}

export default EventPage
