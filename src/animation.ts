import { gsap } from "gsap";
import { IO } from "./utils";
import Splitting from "splitting";

export default function Animate() {
   const heading = document.querySelectorAll("#animate-heading")!;
   const paragraph = document.querySelectorAll("#animate-paragraph")!;
   const images = document.querySelectorAll("#animate-image img")!;

   heading.forEach(async item => {
      const resultsH = Splitting({ target: item, by: "lines" });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function splitLines(lines: any) {
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

      splitLines(resultsH);

      const elem = item.querySelectorAll(".word");
      gsap.set(elem, {
         yPercent: 205,
         opacity: 0,
         rotateX: 50,
         transformStyle: "preserve-3d"
      });

      await IO(item, { threshold: 0.8 });

      gsap.to(elem, {
         yPercent: 0,
         opacity: 1,
         rotateX: 0,
         stagger: elem.length > 100 ? 0.02 : 0.03,
         duration: elem.length > 100 ? 0.65 : 0.75,
         ease: "easeOut"
      });
   });

   paragraph.forEach(async item => {
      const resultsP = Splitting({ target: item, by: "lines" });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function splitLines(lines: any) {
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

      splitLines(resultsP);

      const elem = item.querySelectorAll(".word");

      gsap.set(elem, {
         yPercent: "105",
         opacity: 0,
         transformStyle: "preserve-3d"
      });

      await IO(item, { threshold: 0.8 });

      gsap.to(elem, {
         yPercent: 0,
         opacity: 1,
         stagger: elem.length > 100 ? 0.02 : 0.03,
         duration: elem.length > 100 ? 0.65 : 0.75,
         ease: "easeOut"
      });
   });

   images.forEach(async image => {
      await IO(image, { threshold: 0.8 });

      gsap.set(image, {
         visibility: "visible",
         autoAlpha: 0,
         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      });

      gsap.to(image, {
         autoAlpha: 1,
         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
         duration: 1.4,
         ease: "power2.inOut"
      });
   });
}
