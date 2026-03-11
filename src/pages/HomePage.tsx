import Customer from "@/blocks/Customer"
import BrandIntro from "@/blocks/BrandIntro"
import OnSelling from "@/blocks/OnSelling"
import Hero from "../blocks/Hero"
import Mission from "../blocks/Mission"
import ContactUs from "@/blocks/ContactUs"

const HomePage = () => {
  return (
    <div>
      <BrandIntro backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" />
      <OnSelling/>
      <Hero/>
      {/* <Mission/> */}
      <Customer/>
      <ContactUs/>
    </div>
  )
}

export default HomePage