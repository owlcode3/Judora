
type Props = {
  heading: string,
  paragraph: string,
  headingIdName: string,
  paragraphIdName: string
}

function CorporateTargetCard({ heading, paragraph, headingIdName, paragraphIdName }: Props) {

  return (
    <div>
      <h2 id={`${headingIdName}`} className="text-[#0A57CA] font-bold text-4xl">{heading}</h2>
      <p id={`${paragraphIdName}`} className={"text-[#000000] font-medium text-sm max-w-[38rem]"}>{paragraph}</p>
    </div>
  )
}

export default CorporateTargetCard