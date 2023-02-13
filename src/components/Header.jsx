import React from "react"
import Illustration from "../images/illustration-working.svg"

const Header = () => {
  return (
    <header className="px-8">
      <div className="flex flex-col-reverse mt-12 md:flex md:flex-row md:justify-between md:py-20 md:gap-6 max-w-7xl mx-auto">
        <div className="md:w-full text-center md:text-left">
          <h1 className="text-[3rem] md:text-[3.5rem] leading-tight font-bold text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="text-lg md:text-lg text-gray-400 mt-2 leading-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="font-bold text-white bg-Cyan py-4 px-14 rounded-full mt-8 hover:opacity-50">
            Get Started
          </button>
        </div>

        <div className="mt-8 md:w-full">
          <img
            className="mb-8 md:relative md:left-20 md:scale-150 lg:scale-125 lg:bottom-10 xl:scale-100 xl:bottom-24"
            src={Illustration}
            alt="illustration"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
