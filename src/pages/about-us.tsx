import Header from "../components/header"
import OurHistory from "../components/our-history"


function AboutUs() {
  return (
    <div className="font-primary">
      <div className="bg-[url('/background.png')] bg-cover bg-no-repeat px-32 pt-7">
        <Header />
      </div>
      <>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat py-7">
          <img src="jic.png" alt="jic img" />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <OurHistory />
        </div>
      </>
    </div>
  )
}

export default AboutUs