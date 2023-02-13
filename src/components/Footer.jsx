import React from "react"
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"

const Footer = () => {
  return (
    <footer>
      <div className="bg-DarkViolet">
        <div className="text-center w-full h-64 flex flex-col items-center justify-center gap-8 max-w-7xl m-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Boost your links today
          </h1>
          <button className="textxl lg:text-lg font-bold text-white bg-Cyan py-4 px-8 rounded-full hover:bg-cyan-200">
            Get Stared
          </button>
        </div>
      </div>

      <div className="bg-veryDarkViolet">
        <div className="text-center md:text-left flex flex-col md:flex-row justify-evenly gap-12 p-8 py-20 max-w-7xl m-auto">
          <h1 className="text-3xl text-white font-bold">Shortly</h1>

          <div>
            <h3 className="text-lg font-semibold text-white pb-2">Features</h3>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Link Shortening
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Branded Links
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Analytics
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white pb-2">Blog</h3>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Developers
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Support
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white pb-2">Company</h3>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              About
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Our Team
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Careers
            </p>
            <p className="text-sm text-Gray my-2 font-medium cursor-pointer hover:text-Cyan">
              Contact
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 ">
            <img
              className="rounded-md cursor-pointer hover:bg-Cyan"
              src={Facebook}
              alt="facebook-logo"
            />
            <img
              className="rounded-md cursor-pointer hover:bg-Cyan"
              src={Twitter}
              alt="twitter-logo"
            />
            <img
              className="rounded-md cursor-pointer hover:bg-Cyan"
              src={Pinterest}
              alt="pinterest-logo"
            />
            <img
              className="rounded-md cursor-pointer hover:bg-Cyan"
              src={Instagram}
              alt="instagram-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
