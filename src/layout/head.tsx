import Header from "../home/components/header"
import Hero from "../home/components/hero"


function Head() {
  return (
    <div className='bg-[url("/bg-img.svg")] bg-cover h-[48rem]'>
      <div className="w-full px-32 pt-8">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Head