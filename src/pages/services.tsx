import ActivatedSludge from "../components/activated-sludge"
import Aeration from "../components/aeration"
import ConstructionOperation from "../components/construction-operation"
import Effluent from "../components/effluent"
import Filtration from "../components/filtration"
import Header from "../components/header"
import IsometricView from "../components/isometric-view"
import SandTrap from "../components/sand-trap"
import ScreenBasket from "../components/screen-basket"
import Sedimentation from "../components/sedimentation"
import WePit from "../components/we-pit"

function Services() {
  return (
    <div className="font-primary">
      <div className="bg-[url('/background.png')] bg-cover bg-no-repeat px-32 pt-7">
        <Header />
      </div>
      <>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <ConstructionOperation />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <IsometricView />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <ActivatedSludge />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <ScreenBasket />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <SandTrap />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <WePit />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <Aeration />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <Sedimentation />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <Effluent />
        </div>
        <div className="bg-[url('/background.png')] bg-cover bg-no-repeat">
          <Filtration />
        </div>
      </>
    </div>
  )
}

export default Services