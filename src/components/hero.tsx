import { useEffect, useState } from "react"
import { PrismicLink, PrismicImage } from '@prismicio/react'
import { client } from "../prismic"
import gsap from "gsap"
import Splitting from "splitting"
import { PrismicDocument } from "@prismicio/client"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AppendSpanElement(lines: any) {
  lines.forEach((element: { words: HTMLElement[]; el: HTMLElement }) => {
    const wrappedLines = element.words
      .map(
        (wordsArr: HTMLElement) => `
                            <span class="word_wrap">
                                  ${wordsArr.outerHTML}
                             </span>`
      )
      .join("");
    element.el.innerHTML = wrappedLines;
  });
}


function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prismicData, setPrismicData] = useState<PrismicDocument<Record<string, any>, string, string>[]>()

  useEffect(() => {
    async function FetchPrismicData() {
      const page = await client.getAllByType('home-page')

      setPrismicData(page)
      console.log(prismicData && prismicData[0].data["hero-small-images"][0]["hero-img1"])

      const headingText = page[0].data["hero-heading"][0].text;
      const paragraphText = page[0].data["hero-paragraph"][0].text;

      const heroHeading = document.querySelector("#hero-heading")!;
      heroHeading.innerHTML = headingText
      const heroParagraph = document.querySelector("#hero-paragraph")!;
      heroParagraph.innerHTML = paragraphText

      const resultsH = Splitting({ target: heroHeading, by: "lines" });
      const resultsP = Splitting({ target: heroParagraph, by: "lines" });

      AppendSpanElement(resultsH);
      AppendSpanElement(resultsP);

      gsap.fromTo(
        [heroHeading.querySelectorAll(".word"), heroParagraph.querySelectorAll(".word")],
        {
          visibility: "visible",
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
          ease: "easeOut"
        }
      );
    }
    FetchPrismicData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mt-[8.5rem]">

      <div className="h-[7rem]">
        <h1 id="hero-heading" className=" text-white font-bold text-[3.2rem] max-w-[46rem] leading-[3rem] overflow-hidden invisible" />
      </div>

      <div className="h-[7.8rem]">
        <p id='hero-paragraph' className="text-white text-sm max-w-[40rem] mt-7 invisible" />
      </div>

      <PrismicLink field={prismicData && prismicData[0].data["hero-btn-link"]} >
        <button className="w-40 h-14 mt-7 bg-[#0065E7] rounded-[10px] text-white text-base">
          Read More
        </button>
      </PrismicLink>

      <div className="flex justify-between mt-14 max-w-[25rem]">
        <div className="flex flex-col items-center gap-3">

          <div className="w-16">
            <PrismicImage field={prismicData && prismicData[0].data["hero-small-images"][0]["hero-img1"]} />
          </div>
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

          <div className="w-16">
            <PrismicImage field={prismicData && prismicData[0].data["hero-small-images"][0]["hero-img2"]} />
          </div>
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

          <div className="w-16">
            <PrismicImage field={prismicData && prismicData[0].data["hero-small-images"][0]["hero-img3"]} />
          </div>          <div className="text-white w-24 flex flex-col items-center ">
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