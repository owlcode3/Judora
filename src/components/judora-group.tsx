import { PrismicDocument } from "@prismicio/client"
import { PrismicText } from "@prismicio/react"
import JudoraGroupCard from "./judora-group-card"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: PrismicDocument<Record<string, any>, string, string>[] | undefined
}

function JudoraGroup({ data }: Props) {
  return (
    <div className="bg-[url('/background.png')] min-h-[52rem] max-h-[52rem] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-8">
      <h2 className="text-white font-semibold max-w-[62rem]">
        <PrismicText field={data && data[0].data["judora-group-h2"]} />
      </h2>
      <div className="w-[62rem] grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <JudoraGroupCard key={index} index={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default JudoraGroup