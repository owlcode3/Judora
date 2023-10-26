import { PrismicDocument } from "@prismicio/client"
import { useEffect, useState } from "react"
import CorporateTarget from "../components/corporate-target"
import Images from "../components/images"
import JudoraGroup from "../components/judora-group"
import Operations from "../components/operations"
import OurProjects from "../components/our-projects"
import { client } from "../prismic"

function Body() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prismicData, setPrismicData] = useState<PrismicDocument<Record<string, any>, string, string>[]>()

  useEffect(() => {
    async function FetchPrismicData() {
      const page = await client.getAllByType('home-page')

      setPrismicData(page)
    }

    FetchPrismicData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Operations />
      <JudoraGroup data={prismicData} />
      <CorporateTarget />
      <Images />
      <OurProjects />
    </>
  )
}

export default Body