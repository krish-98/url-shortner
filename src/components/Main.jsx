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
            <div className="bg-white p-8 relative after:w-8 after:h-2 after:bg-Cyan after:inline-block after:absolute after:top-28 after:-right-4 after:z-[1] after:translate-x-4">
              <span className="absolute -top-8 bg-DarkViolet p-4 rounded-full">
                <img src={IconBrand} alt="icon-brand" />
              </span>
              <h1 className="text-2xl font-bold my-4 mt-12">
                Brand Recognition
              </h1>
              <p className="text-Gray font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="bg-white p-8 relative mt-20 after:w-8 after:h-2 after:bg-Cyan after:inline-block after:absolute after:top-28 after:-right-4 after:z-[1] after:translate-x-4">
              <span className="absolute -top-8 bg-DarkViolet p-4 rounded-full">
                <img src={Records} alt="records" />
              </span>
              <h1 className="text-2xl font-bold my-4 mt-12">
                Detailed Records
              </h1>
              <p className="text-Gray font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, laudantium. Assumenda quidem harum consectetur quo
                tenetur, vero error corporis dolore?
              </p>
            </div>

            <div className="bg-white p-8 relative mt-40">
              <span className="absolute -top-8 bg-DarkViolet p-4 rounded-full">
                <img src={Customizable} alt="customizable" />
              </span>
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
