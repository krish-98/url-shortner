import React from "react"
import UrlShortner from "./UrlShortner"
import IconBrand from "../images/icon-brand-recognition.svg"
import Records from "../images/icon-detailed-records.svg"
import Customizable from "../images/icon-fully-customizable.svg"

const Main = () => {
  return (
    <main className="mt-36 md:mt-10 bg-neutral-100">
      <UrlShortner />

      <section className="text-center md:text-left px-4">
        <div className="">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold">Advanced Statistics</h1>
            <p className="mt-4 font-medium text-Gray">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>

          <div className="md:flex gap-6 max-w-7xl m-auto pb-16">
            <div className="md:flex-1 flex flex-col items-center bg-white p-8">
              {/* relative after:absolute after:top-[26.3rem] after:bg-Cyan after:w-36 sm:after:w-40 after:h-2 after:rotate-90 md:after:-right-4 md:after:top-28 md:after:translate-x-4 */}
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={IconBrand} alt="icon-brand" />
              </div>
              <h1 className="text-2xl text-center font-bold my-4 mt-12">
                Brand Recognition
              </h1>
              <p className="text-Gray lg:font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="md:flex-1 flex flex-col items-center bg-white p-8">
              {/* relative after:absolute after:top-[26.3rem] after:bg-Cyan after:w-36 sm:after:w-40 after:h-2 after:rotate-90 md:after:-right-4 md:after:top-28 md:after:translate-x-4 */}
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={Records} alt="records" />
              </div>
              <h1 className="text-2xl text-center font-bold my-4 mt-12">
                Detailed Records
              </h1>
              <p className="text-Gray lg:font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="md:flex-1 flex flex-col items-center bg-white p-8">
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={Customizable} alt="customizable" />
              </div>
              <h1 className="text-2xl text-center font-bold my-4 mt-12">
                Fully customizable
              </h1>
              <p className="text-Gray lg:font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
