import React, { useState } from "react"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="m-4">
      {/* For Mobile screen */}
      <nav className="flex justify-between items-center md:hidden">
        <h1 className="text-veryDarkViolet font-bold text-4xl cursor-pointer">
          Shortly
        </h1>
        <div>
          {!toggle ? (
            <GiHamburgerMenu
              onClick={() => setToggle(true)}
              className="w-8 h-8 text-Gray cursor-pointer"
            />
          ) : (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <ImCross
                onClick={() => setToggle(false)}
                className="w-8 h-8 text-Gray cursor-pointer"
              />
            </motion.div>
          )}
        </div>
      </nav>

      {toggle && (
        <ul className="bg-slate-200 text-center mt-2 rounded-3xl md:hidden ">
          <li className="border-b-2 border-b-gray-50 py-2 font-medium text-DarkViolet hover:text-Gray cursor-pointer">
            Features
          </li>
          <li className="border-b-2 border-b-gray-50 py-2 font-medium text-DarkViolet hover:text-Gray cursor-pointer">
            Pricing
          </li>
          <li className="border-b-2 border-b-gray-50 py-2 font-medium text-DarkViolet hover:text-Gray cursor-pointer">
            Resources
          </li>
          <li className="border-b-2 border-b-gray-50 py-2 font-medium text-DarkViolet hover:text-Gray cursor-pointer">
            Login
          </li>
          <li className="border-b-2 border-b-gray-50 py-2 font-medium text-DarkViolet hover:text-Gray cursor-pointer">
            Sign Up
          </li>
        </ul>
      )}

      {/* For Desktop screen */}
      <nav className="hidden md:flex justify-between items-center max-w-7xl m-auto my-10">
        <div className="flex items-center gap-10">
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

        <div className="flex items-center gap-8">
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
