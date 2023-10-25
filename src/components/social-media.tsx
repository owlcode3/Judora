import { Link } from "react-router-dom"

function SocialMedia() {
  return (
    <div className="flex justify-between items-center max-w-[30rem] ml-auto mx-auto">
      <Link to='/'>
        <img className="w-12" src="/fb.png" alt="facebook icon" />
      </Link>
      <Link to='/'>
        <img className="w-12" src="/wh.png" alt="whatsapp icon" />
      </Link>
      <Link to='/'>
        <img className="w-12" src="/in.png" alt="instagram icon" />
      </Link>
      <Link to='/'>
        <img className="w-12" src="/go.png" alt="google icon" />
      </Link>
      <Link to='/'>
        <img className="w-12" src="/ph.png" alt="phone call icon" />
      </Link>
    </div>
  )
}

export default SocialMedia