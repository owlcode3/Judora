
function Hero() {
  return (
    <div className="mt-[8.5rem]">
      <h1 className="text-white font-bold text-[3.2rem] max-w-[46rem] leading-[3rem]">
        TRANSFORMING SPACES.
        SAVING THE ENVIRONMENT.
      </h1>

      <p className="text-white text-sm max-w-[40rem] mt-7">
        Judora Integrated Services Nigeria Limited is an indigenous Limited Liability
        Company, incorporated according to the relevant statutory provisions of the
        Federal Republic of Nigeria. Our business activities comply with all
        applicable government legislation's, human and environmental safety as well as
        the International guidelines on Environmental protection procedures.
      </p>

      <button className="w-40 h-14 mt-7 bg-[#0065E7] rounded-[10px] text-white text-base">Read More</button>

      <div className="flex justify-between mt-20 max-w-[25rem]">
        <div className="flex flex-col items-center gap-3">
          <img className="w-16" src="/light icon.svg" alt="light img" />
          <div className="text-white w-24 flex flex-col items-center ">
            <div>
              Strategic
            </div>
            <div>
              Consulting
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img className="w-16" src="/tech icon.svg" alt="tech img" />
          <div className="text-white w-24 flex flex-col items-center ">
            <div>
              Technology
            </div>
            <div>
              Consulting
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img className="w-16" src="service con.svg" alt="service img" />
          <div className="text-white w-24 flex flex-col items-center ">
            <div>
              Help Desk
            </div>
            <div>
              Services
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero