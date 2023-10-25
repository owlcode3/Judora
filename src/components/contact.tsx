
function Contact() {
  return (
    <div className="relative flex flex-col h-[34rem] px-8">
      <img className="w-full h-full object-cover" src="/cu-img.png" alt="contact us img" />

      <div className="absolute top-16 left-24 flex flex-col gap-16">
        <h3 className="font-bold text-white text-5xl">CONTACT US</h3>

        <div className="font-normal text-white text-xl flex flex-col gap-5">
          <span>Email : info@judora.com.ng</span>
          <div className="flex gap-10">
            <span>Tel: </span>
            <div className="flex flex-col items-end">
              <span>
                +234 – 84 304 100
              </span>
              <span>
                +234 - 706 452 3401
              </span>
            </div>
          </div>
          <p className="max-w-[21rem]">
            Head Office:  #10 Isiokpo Street,
            D/Line, Port Harcourt, Rivers State,
            Nigeria.
          </p>
          <p className="max-w-[24rem]">
            Branch Office:   # Adekunbi Crescent,
            Off Allen Avenue, Ikeja, Lagos State,
            Nigeria.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact