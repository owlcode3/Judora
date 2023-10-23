import Header from "../components/header"
import Hero from "../components/hero"


function Head() {
  return (
    <div className='bg-[url("/bg-img.svg")] min-h-[48rem] max-h-[48rem] bg-cover bg-center bg-no-repeat'>
      <div className="w-full px-32 py-8 pt-7">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Head