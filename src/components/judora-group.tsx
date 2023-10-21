import JudoraGroupCard from "./judora-group-card"

function JudoraGroup() {
  return (
    <div className="bg-[url('/background.png')] min-h-[52rem] max-h-[52rem] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-8">
      <p className="text-white font-semibold max-w-[62rem]">Judora Group is committed to being a leading Engineering,
        Procurement, Logistics and Construction company committed
        to providing Quality Technical and Environmental Management
        Services through highly skilled and motivated employees
      </p>
      <div className="w-[62rem] grid grid-cols-3 gap-3">
        <JudoraGroupCard imgNo={"1"} content1={"Ensuring sustainable and"} content2={"professional excellence"} />
        <JudoraGroupCard imgNo={"2"} content1={"Total commitment to"} content2={"environmental  safety"} />
        <JudoraGroupCard imgNo={"3"} content1={"Adhere to fair transparent"} content2={"and ethical practices"} />
        <JudoraGroupCard imgNo={"4"} content1={"Creating optimum working"} content2={"and living environment"} />
        <JudoraGroupCard imgNo={"5"} content1={"Providing reliable customer"} content2={"care systems"} />
        <JudoraGroupCard imgNo={"6"} content1={"Providing industrial support"} content2={"and quality services"} />
      </div>
    </div>
  )
}

export default JudoraGroup