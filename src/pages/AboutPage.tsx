import ContactUs from "@/blocks/ContactUs"
import Customer from "@/blocks/Customer"
import ClientCards from "@/blocks/ClientCards"
import SubHero from "@/blocks/SubHero"
import YTVideo from "@/components/YTVideo"

const AboutPage = () => {
  return (
    <div>
        <SubHero titleShadow descriptionShadow />
        <ClientCards />
        
        <YTVideo videoId="ncvwHd0c_Rg" title="About Us" />
        <Customer/>
        <ContactUs/>
    </div>
  )
}

export default AboutPage