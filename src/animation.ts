import Splitting from "splitting";
import { IO } from "./utils";
import { gsap } from "gsap";

export default function Animate() {
   const heading = document.querySelectorAll("#animate-heading")!;
   const paragraph = document.querySelectorAll("#animate-paragraph")!;
   const images = document.querySelectorAll("#animate-image img")!;

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

   heading.forEach(item => {
      const lines = Splitting({ target: item, by: "lines" });

      AppendSpanElement(lines);

      gsap.set(item.querySelectorAll(".word"), {
         yPercent: 205,
         opacity: 0,
         rotateX: 50,
         transformStyle: "preserve-3d"
      });

      IO(item, { threshold: 0.8 }).then(() => {
         const elem = item.querySelectorAll(".word");
         gsap.to(elem, {
            yPercent: 0,
            opacity: 1,
            stagger: elem.length > 100 ? 0.02 : 0.03,
            duration: elem.length > 100 ? 0.65 : 0.75,
            ease: "easeOut"
         });
      });
   });

   paragraph.forEach(item => {
      const lines = Splitting({ target: item, by: "lines" });

      AppendSpanElement(lines);

      gsap.set(item.querySelectorAll(".word"), {
         yPercent: "105",
         opacity: 0,
         transformStyle: "preserve-3d"
      });

      IO(item, { threshold: 0.8 }).then(() => {
         const elem = item.querySelectorAll(".word");
         gsap.to(elem, {
            yPercent: 0,
            opacity: 1,
            stagger: elem.length > 100 ? 0.02 : 0.03,
            duration: elem.length > 100 ? 0.65 : 0.75,
            ease: "easeOut"
         });
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
