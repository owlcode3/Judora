import ConstructionOperationCard from "./construction-operation-card"

function OurHistory() {
  return (
    <div className="py-7">
      <div className="w-fit px-9">
        <div className="flex gap-14 flex-row-reverse">
          <div className="h-[100%] w-[40rem]">
            <img className="object-cover w-full h-full" src="/helm.png" alt="judora img" />
          </div>

          <div className="flex flex-col justify-between">
            <ConstructionOperationCard
              paragraphMaxWidth="42rem"
              paragraphFontSize=".92rem"
              heading={"Our History"}
              paragraph={
                `We have successfully maintained a consistent track record of employing best business
               practices that improve efficiency, reduce operating costs whilst increasing productivity;
               all to tight time scales and within budget for many years.This is so because our approach
               to project management is over driven by selfless commitment and the engagement of the right
               professionals and equipment to ensure that our company is duty ready to provide industry
               standard quality services to our numerous clients with precision.`
              }
            />
            <ConstructionOperationCard
              paragraphMaxWidth="43rem"
              headingMaxWidth="40rem"
              paragraphFontSize=".92rem"
              heading={"Our Commitment"}
              paragraph={
                `The foundational driving guides of the Judora Integrated Services Nigeria Limited Management
                 Team is relevant to the application of best business practices that ensures professionalism,
                 operation ethics, procedural management and clients satisfaction maximization strategy.We
                 have successfully maintained a consistent track record of employing best business practices
                 that improve efficiency, reduce operating costs whilst increasing productivity; all to
                 tight time scales and within budget for many years.This is so because our approach to
                 project management is over driven by selfless commitment and the engagement of the right
                 professionals and equipment to ensure that our company is duty ready to provide industry
                 standard quality services to our numerous clients with precision.
              `
              }
            />

            <div>
              <h2 className="text-white font-semibold text-3xl mb-3 leading-[3.2rem]">Mission</h2>
              <ol className="text-white list-outside list-disc ml-6 text-[.92rem]">
                <li>To provide quality services to our clients.</li>
                <li>To develop rapid improvement systems.</li>
                <li>To create opportunities for creativity and growth</li>
                <li>To create workable goal attaining system</li>
                <li>To provide reliable customer care system</li>
                <li>To ensure efficient and quality services</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurHistory