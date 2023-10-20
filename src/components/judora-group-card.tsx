
type Props = {
  imgNo: string,
  content1: string,
  content2: string
}

function JudoraGroupCard({ imgNo, content1, content2 }: Props) {
  return (
    <div className="relative">
      <img className="w-full h-full object-contain" src={`/j-img-${imgNo}.svg`} alt="person image" />
      <div className="absolute bottom-0 w-full h-28 bg-[rgba(13,12,12,0.7)] shadow-2xl  flex flex-col items-center justify-center text-white font-medium">
        <span>
          {content1}
        </span>
        <span>
          {content2}
        </span>
      </div>
    </div>
  )
}

export default JudoraGroupCard