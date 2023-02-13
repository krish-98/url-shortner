import React, { useState } from "react"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="p-8">
      {/* For Mobile screen */}
      <nav className="relative flex justify-between items-center md:hidden">
        <h1 className="text-veryDarkViolet font-bold text-4xl cursor-pointer">
          Shortly
        </h1>
        <div>
          {!toggle ? (
            <GiHamburgerMenu
              onClick={() => setToggle(true)}
              className="w-7 h-7 text-Gray cursor-pointer"
            />
          ) : (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <ImCross
                onClick={() => setToggle(false)}
                className="w-7 h-7 text-Gray cursor-pointer"
              />
            </motion.div>
          )}
        </div>
      </nav>

      {toggle && (
        <ul className="absolute w-full top-[5.5rem] right-0 left-0 py-6 bg-[#eff1f7] text-center rounded-b-[5rem] md:hidden">
          <li className="py-2 font-medium text-DarkViolet cursor-pointer transition-all duration-300 hover:text-Gray hover:bg-gray-50">
            Features
          </li>
          <li className="py-2 font-medium text-DarkViolet cursor-pointer transition-all duration-300 hover:text-Gray hover:bg-gray-50">
            Pricing
          </li>
          <li className="py-2 font-medium text-DarkViolet cursor-pointer transition-all duration-300 hover:text-Gray hover:bg-gray-50">
            Resources
          </li>
          <li className="py-2 font-medium text-DarkViolet cursor-pointer transition-all duration-300 hover:text-Gray hover:bg-gray-50">
            Login
          </li>
          <li className="py-2 font-medium text-DarkViolet cursor-pointer transition-all duration-300 hover:text-Gray hover:bg-gray-50">
            Sign Up
          </li>
        </ul>
      )}

      {/* For Desktop screen */}
      <nav className="hidden md:flex justify-between items-center max-w-7xl m-auto">
        <div className="flex items-center gap-14">
          <h1 className="text-veryDarkViolet font-bold text-4xl">Shortly</h1>
          <ul className="flex gap-8">
            <li className="text-grayishViolet font-semibold hover:text-veryDarkViolet cursor-pointer">
              Features
            </li>
            <li className="text-grayishViolet font-semibold hover:text-veryDarkViolet cursor-pointer">
              Pricing
            </li>
            <li className="text-grayishViolet font-semibold hover:text-veryDarkViolet cursor-pointer">
              Resources
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-grayishViolet font-semibold hover:text-veryDarkViolet cursor-pointer">
            Login
          </p>
          <p className="font-semibold text-white bg-Cyan px-6 py-2 rounded-full hover:opacity-50 cursor-pointer">
            Sign Up
          </p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
