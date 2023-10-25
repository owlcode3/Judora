import Contact from "../components/contact"
import Header from "../components/header"
import SocialMedia from "../components/social-media"

function ContactUs() {
  return (
    <>
      <div className="bg-[url('/background.png')] bg-cover bg-no-repeat px-32 pt-7">
        <Header />
      </div>
      <div className="bg-[url('/background.png')] bg-cover bg-no-repeat pt-8 pb-[1.7rem]">
        <Contact />
        <div className="py-14 pb-6">
          <SocialMedia />
        </div>
      </div>
    </>
  )
}

export default ContactUs