import React from 'react'
import { FaUser} from 'react-icons/fa';
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-120 py-7'>
      <div>
        <img src={logo} width={130} alt="" />
        </div>
      <div>search</div>
      <div>
        <div>
            <FaUser className="text-black/" />
            <p>Hello,</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
