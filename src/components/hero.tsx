import { Link } from "react-router-dom"
import { gsap } from 'gsap'
import { useRef, useEffect } from "react"
import Splitting from "splitting"



function Hero() {

  const hRef = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLHeadingElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain

  useEffect(() => {

    const resultsH = Splitting({ target: hRef.current!, by: 'lines' });
    const resultsP = Splitting({ target: pRef.current!, by: 'lines' });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function splitLines(lines: any) {
      lines.forEach((element: { words: HTMLElement[]; el: HTMLElement }) => {
        const wrappedLines = element.words
          .map((wordsArr: HTMLElement) => `
                           <span class="word_wrap">
                                 ${wordsArr.outerHTML}
                            </span>`
          )
          .join("");
        element.el.innerHTML = wrappedLines;
      });
    }

    splitLines(resultsH)
    splitLines(resultsP)

    gsap.fromTo(
      ".word", {
      yPercent: 205,
      opacity: 0,
      rotateX: 50,
      transformStyle: "preserve-3d"
    },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 0.75,
        ease: "easeOut",
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mt-[8.5rem]">
      <h1 ref={hRef} className=" text-white font-bold text-[3.2rem] max-w-[46rem] leading-[3rem] overflow-hidden">
        TRANSFORMING SPACES.
        SAVING THE ENVIRONMENT.
      </h1>

      <p ref={pRef} className="text-white text-sm max-w-[40rem] mt-7">
        Judora Integrated Services Nigeria Limited is an indigenous Limited Liability
        Company, incorporated according to the relevant statutory provisions of the
        Federal Republic of Nigeria. Our business activities comply with all
        applicable government legislation's, human and environmental safety as well as
        the International guidelines on Environmental protection procedures.
      </p>

      <Link to="/services" className="">
        <button className="w-40 h-14 mt-7 bg-[#0065E7] rounded-[10px] text-white text-base">
          Read More
        </button>
      </Link>

      <div className="flex justify-between mt-14 max-w-[25rem]">
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