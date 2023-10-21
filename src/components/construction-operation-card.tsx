type Props = {
  heading?: string,
  paragraph: string,
  headingMaxWidth?: string,
  paragraphMaxWidth: string
}

function ConstructionOperationCard({ heading, paragraph, headingMaxWidth, paragraphMaxWidth }: Props) {
  return (
    <div>
      {heading && <h2 style={{ maxWidth: headingMaxWidth }} className="text-white font-semibold text-3xl mb-3 leading-[3.2rem]">{heading}</h2>}
      <p style={{ maxWidth: paragraphMaxWidth }} className={"text-white font-medium text-base"}>{paragraph}</p>
    </div>)
}

export default ConstructionOperationCard