import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center w-[49.8rem]">
      <img src="/logo.svg" alt="judora logo" className="w-40" />
      <nav className="flex justify-between ml-auto w-[28rem] text-white text-lg font-semibold">
        <Link to='/' className="relative after:absolute after:block after:right-0 after:bottom-[-2] after:w-0 after:h-[0.2rem] after:bg-white after:transition-all delay-75 ease-in-out hover:after:left-0 hover:after:w-full">
          Home
        </Link>
        <Link to='/services' className="relative after:absolute after:block after:right-0 after:bottom-[-2] after:w-0 after:h-[0.2rem] after:bg-white after:transition-all delay-75 ease-in-out hover:after:left-0 hover:after:w-full">
          Services
        </Link>
        <Link to='/' className="relative after:absolute after:block after:right-0 after:bottom-[-2] after:w-0 after:h-[0.2rem] after:bg-white after:transition-all delay-75 ease-in-out hover:after:left-0 hover:after:w-full">
          About Us
        </Link>
        <Link to='/' className="relative after:absolute after:block after:right-0 after:bottom-[-2] after:w-0 after:h-[0.2rem] after:bg-white after:transition-all delay-75 ease-in-out hover:after:left-0 hover:after:w-full">
          Contact Us
        </Link>
      </nav>
    </div>
  )
}

export default Header