import Contact from "../components/contact"
import SocialMedia from "../components/social-media"

function Footer() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-no-repeat pt-8 pb-[1.7rem]">
      <Contact />

      <div className="flex items-center bg-white w-full h-14 mt-20">
        <div className="flex justify-around items-center bg-[#0464E8] h-[80%] w-full px-5">
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
          <span className="font-secondary font-semibold text-white text-[1.2rem]">JUDORA</span>
        </div>
      </div>

      <div className="py-8">
        <SocialMedia />
      </div>

      <div className="px-8">
        <span className="w-full h-2 rounded-none border block bg-[#D9D9D9]"></span>
        <div className="flex justify-between font-semibold text-white text-xl mt-3">
          <span>2023 JUDORA.COM</span>
          <span>ALL RIGHTS RESERVED</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  )
}

export default Footer