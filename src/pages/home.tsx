import Body from "../layout/body"
import Footer from "../layout/footer"
import Head from "../layout/head"
import Animate from "../animation.ts";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    Animate()
  }, [])

  return (
    <div className="font-primary">
      <Head />
      <Body />
      <Footer />
    </div>
  )
}

export default Home