type Props = {
  heading: string,
  paragraph: string,
}

function CorporateTargetCard({ heading, paragraph }: Props) {
  return (
    <div>
      <h2 className="text-[#0A57CA] font-bold text-4xl mb-2">{heading}</h2>
      <p className={"text-[#000000] font-medium text-sm max-w-[38rem]"}>{paragraph}</p>
    </div>
  )
}

export default CorporateTargetCard