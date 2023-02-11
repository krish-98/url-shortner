import React from "react"
import UrlShortner from "./UrlShortner"
import IconBrand from "../images/icon-brand-recognition.svg"
import Records from "../images/icon-detailed-records.svg"
import Customizable from "../images/icon-fully-customizable.svg"

const Main = () => {
  return (
    <main className="mt-28 bg-neutral-100 h-[200vh] md:h-auto">
      <UrlShortner />

      <section className="h-screen text-center md:text-left mx-4">
        <div className="md:w-[70%] mx-auto">
          <div className="text-center py-28">
            <h1 className="text-4xl font-bold">Advanced Statistics</h1>
            <p className="mt-4 font-medium text-Gray">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>

          <div className="md:flex justify-between items-center gap-8 h-[40vh]">
            <div className="flex flex-col items-center bg-white p-8 relative after:absolute after:bottom-0 after:bg-Cyan after:w-32 after:h-2 after:rotate-90 md:after:-right-4 md:after:top-28 md:after:translate-x-4">
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={IconBrand} alt="icon-brand" />
              </div>
              <h1 className="text-2xl font-bold my-4 mt-12">
                Brand Recognition
              </h1>
              <p className="text-Gray font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 relative mt-20 after:absolute after:top-72 after:bg-Cyan after:w-32 after:h-2 after:rotate-90 md:after:-right-4 md:after:top-28 md:after:translate-x-4">
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={Records} alt="records" />
              </div>
              <h1 className="text-2xl font-bold my-4 mt-12">
                Detailed Records
              </h1>
              <p className="text-Gray font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 relative mt-40">
              <div className="bg-DarkViolet p-4 rounded-full">
                <img src={Customizable} alt="customizable" />
              </div>
              <h1 className="text-2xl font-bold my-4 mt-12">
                Fully customizable
              </h1>
              <p className="text-Gray font-medium">
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
