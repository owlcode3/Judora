
function OurClients() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-no-repeat pt-8 pb-12 px-8">
      <div className="relative flex flex-col h-auto border-4 rounded-none border-[#ffff]">
        <span className="absolute font-bold text-white text-5xl right-[23rem] top-[12.7rem]">OUR CLIENTS</span>
        <img src="/oi-img.png" alt="our client img" />
        <div className="grid grid-cols-6 gap-1">
          <div className="relative overflow-hidden h-full rounded-t-none rounded-r-none border-r-[2px] border-t-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Shell Industrial Area (IA)</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-1.svg" alt="point" />
          </div>

          <div className="relative overflow-hidden h-full rounded-t-none rounded-r-none border-r-[2px] border-t-[2px] rounded-l-none border-l-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Soku location</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-2.svg" alt="point" />

          </div>

          <div className="relative overflow-hidden h-full rounded-t-none rounded-r-none border-r-[2px] border-t-[2px] rounded-l-none border-l-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Imo River location</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-2.svg" alt="point" />

          </div>

          <div className="relative overflow-hidden h-full rounded-t-none rounded-r-none border-r-[2px] border-t-[2px] rounded-l-none border-l-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Gbaran location</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-2.svg" alt="point" />

          </div>

          <div className="relative overflow-hidden h-full rounded-t-none rounded-r-none border-r-[2px] border-t-[2px] rounded-l-none border-l-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Nun River 1 location</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-2.svg" alt="point" />

          </div>

          <div className="relative overflow-hidden h-full rounded-t-none border-t-[2px] rounded-l-none border-l-[2px]" >
            <img className="object-cover w-full h-full" src="/oi-card-img.svg" alt="card img" />
            <div className="flex flex-col justify-center items-center gap-12 absolute bottom-0 w-full h-3/4">
              <img className="w-16" src="/g5.svg" alt="soku" />
              <span className="font-medium text-white text-sm">Nun River 2 location</span>
            </div>
            <img className="absolute right-5 top-5 w-7" src="/point-2.svg" alt="point" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients