import CorporateTargetCard from "./corporate-target-card"

function CorporateTarget() {
  return (
    <div className="py-7">
      <div className="flex gap-14 h-[32rem] w-fit pl-9 pr-1">
        <div className="relative h-[100%] w-[34rem]">
          <img className="object-cover w-full h-full" src="/soku.svg" alt="soku img" />
          <div className="absolute bottom-0 w-full h-[5.6rem] bg-[rgba(13,12,12,0.4)] shadow-2xl  flex items-center justify-between pl-5 pr-10 text-white font-medium">
            <img className="w-14" src="/soku-logo.svg" alt="soku logo" />
            <div className="flex flex-col font-semibold text-xl">
              <span>Upgrade of SOKU</span>
              <span>Treatment Plant</span>
            </div>
            <span className="font-semibold text-xl mt-6">SPDC</span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <CorporateTargetCard
            heading={"OUR CORPORATE TARGET"}
            paragraph={"Judora Integrated Services Nigeria Limited has a structured and formalized job execution modus-operandi to create, maintain and apply individual employee competence and expertise to customer needs as to retain our target which is consistency in rendering satisfactory services to all our clients."}
          />
          <CorporateTargetCard
            heading={"OUR WORK FORCE"}
            paragraph={"Judora Integrated Services Nigeria Limited work force is known for their enthusiasm, mental and physical resilience to deliver according to customer demands with preparation to tackle unfamiliar problems. Hence, we are just the perfect choice for the Construction, Operation, Maintenance of Sewage Treatment Plants and Transportation of E-Waste and Industrial Support Service related needs"}
          />
          <CorporateTargetCard
            heading={"QUALITY ASSURANCE"}
            paragraph={"Quality assurance is a product of training, experience, competence, intelligence and creativity. We have a STANDARD STRUCTURE OF QUALITY MAINTENANCE CULTURE, which enables us to uphold our clients’ satisfaction according to time and job quality specification. Accordingly, we pull a hold on the use of genuine materials and the retainer-ship of qualified personnel in this company in order to maintain the Judora Management prescribed standard for Waste Management and Industrial support services."}
          />
        </div>
      </div>
    </div>
  )
}

export default CorporateTarget