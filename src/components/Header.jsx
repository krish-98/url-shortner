import React from "react"
import Illustration from "../images/illustration-working.svg"

const Header = () => {
  return (
    <header className="mx-8">
      <div className="flex flex-col-reverse mt-16 md:flex md:flex-row md:justify-between max-w-7xl mx-auto md:mt-44">
        <div className="text-center md:text-left">
          <h1 className="text-[3rem] md:text-[4rem] leading-tight font-bold text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-2 leading-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="font-bold text-white bg-Cyan py-4 px-14 rounded-full mt-8 hover:opacity-50">
            Get Started
          </button>
        </div>

        <div className="mt-8 w-screen">
          <img
            className="mb-8 md:relative -top-20 left-64 object-contain"
            src={Illustration}
            alt="illustration"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
