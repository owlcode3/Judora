import { PrismicDocument } from "@prismicio/client"
import { PrismicImage, PrismicText } from "@prismicio/react"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: PrismicDocument<Record<string, any>, string, string>[] | undefined,
  index: number
}

function JudoraGroupCard({ data, index }: Props) {
  console.log(data && data[0].data["judora-group-images"][0]["judora-group-img5"])

  return (
    <div className="relative">
      <div className="max-h-[20rem]">
        <PrismicImage className="w-full h-full object-contain" field={data && data[0].data["judora-group-images"][0][`judora-group-img${index + 1}`]} />
      </div>

      <div className="absolute bottom-0 w-full h-28 bg-[rgba(13,12,12,0.7)] shadow-2xl  flex flex-col items-center justify-center text-white font-medium">
        <div className="max-w-[15rem] text-center">
          <PrismicText field={data && data[0].data["judora-group-images"][0][`judora-group-img${index + 1}-text`]} />
        </div>
      </div>
    </div>
  )
}

export default JudoraGroupCard