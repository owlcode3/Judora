type Props = {
  heading?: string,
  paragraph: string,
  headingMaxWidth?: string,
  paragraphMaxWidth: string
  headingFontSize?: string,
  paragraphFontSize?: string
}

function ConstructionOperationCard({ heading, paragraph, headingMaxWidth, paragraphMaxWidth, headingFontSize, paragraphFontSize }: Props) {
  return (
    <div>
      {heading && <h2 style={{ maxWidth: headingMaxWidth, fontSize: headingFontSize }} className="text-white font-semibold text-3xl mb-3 leading-[3.2rem]">{heading}</h2>}
      <p style={{ maxWidth: paragraphMaxWidth, fontSize: paragraphFontSize }} className={"text-white font-medium text-base"}>{paragraph}</p>
    </div>)
}

export default ConstructionOperationCard