import ConstructionOperationCard from "./construction-operation-card"

function ConstructionOperation() {
  return (
    <div className="py-7">
      <div className="w-fit pl-9 pr-8">
        <div className="flex gap-14">
          <div className="h-[100%] w-[30rem]">
            <img className="object-cover w-full h-full" src="/jj-img.svg" alt="judora img" />
          </div>

          <div className="flex flex-col justify-between">
            <ConstructionOperationCard
              paragraphMaxWidth="42rem"
              paragraph={"The company, Judora Integrated Services Nigeria Limited is an indigenous Limited Liability Company, incorporated according to the relevant statutory provisions of the Federal Republic of Nigeria. Our business activities comply with all applicable government legislation's, human and environmental safety as well as the International guidelines on Environmental protection procedures. The goal of our operation is a timeous completion of all our clients’ objectives with a good combination of our qualified personnel and modern technology. The Continual investment in our firm's technical competences ensures the professionalism in our job execution and assurance of our customers’ satisfaction."}
            />
            <ConstructionOperationCard
              headingMaxWidth="40rem"
              paragraphMaxWidth="43rem"
              heading={"Construction, Operation and Maintenance of Sewage Treatment Plant"}
              paragraph={"We use Activated Sludge system technology as our treatment process for standard waste water treatment. In Judora, we do not only construct, but also conduct the necessary pre fabrication and location analysis to determine the suitability of our system to clients needs. This we achieve by deploying our professional staff to achieve such feat at just a commitment cost."}
            />
          </div>
        </div>
        <div className="mt-4 pl-2">
          <h3 className="font-semibold text-white text-[2.04rem] mb-3">
            Sole Distribution Agent of Modular/Mobile Sewage Treatment plant
          </h3>
          <p className="text-white font-normal max-w-[73.8rem]">
            Judora is the exclusive representative in Africa for PPU-Umwelttechnik GmbH with a brand name, Clearfox. Clearfox is the manufacturer of Containerized Mobile Sewage Treatment Plant. This unique and user friendly technology is designed to proffer solution for companies with a smaller workforce and lesser volume of waste water. It has the capacity of treating sewage between the range of 15m3 to 50m3 and suitable for a workforce of between 30 to 300 persons. The product has a very cost effective maintenance culture and we have supplied it to Shell Petroleum Development Company (SPDC), It is therefore highly recommended to the oil industries. Our sole aim is a timeous completion of all our clients’ objectives with a good combination of qualified personnel and modern technology. The Continual investment in our firm's technical competences ensures the professionalism in our job execution and assurance of our customers’ satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConstructionOperation