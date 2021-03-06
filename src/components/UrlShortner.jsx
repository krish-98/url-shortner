import React, { useState } from "react"

const UrlShortner = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState({})
  const [isValid, setIsValid] = useState(true)
  const [copiedText, setCopiedText] = useState(false)
  const [text, setText] = useState("Copy")
  const [lists, setLists] = useState([])

  const inputHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setValue(e.target.value)
  }

  const URLShortner = (e) => {
    e.preventDefault()
    const URL = `https://api.shrtco.de/v2/shorten?url=`

    if (value === "") {
      setIsValid(false)
    } else {
      const fetchedData = fetch(URL + value)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
          setLists((previousData) => [...previousData, data])
          setValue("")
        })
        .catch((error) => {
          console.log(error.message)
        })

      return fetchedData
    }
  }

  const copyToClipboardHandler = (URLCopied) => {
    navigator.clipboard.writeText(URLCopied)
    setCopiedText(true)

    setText("Copied")
  }

  return (
    <section className="relative -top-20 m-4">
      <form
        onSubmit={URLShortner}
        className="w-full md:flex bg-DarkViolet p-12  md:w-[70%] mx-auto rounded-lg  "
      >
        <div className="w-full my-4 md:my-0 md:w-[80%]">
          <label htmlFor="">
            <input
              className={`w-full p-4 rounded-lg outline-none border-2 ${
                !isValid
                  ? `border-Red placeholder:text-Red`
                  : `border-white placeholder:text-Gray`
              }`}
              type="text"
              placeholder="Shorten a link here..."
              value={value}
              onChange={inputHandler}
            />
          </label>
          {!isValid && (
            <p className="mt-2 text-Red">Please add a link to shorten them</p>
          )}
        </div>
        <div className="w-full md:w-[20%]">
          <button className="w-full md:ml-8 bg-Cyan px-4 py-4 text-white rounded-xl hover:opacity-50">
            Shorten It!
          </button>
        </div>
      </form>

      {data.ok &&
        lists?.length > 0 &&
        lists?.map((list) => (
          <div
            key={list.result.code}
            className="md:w-[70%] mx-auto bg-white mt-4 p-6 md:flex justify-between items-center font-semibold rounded-lg  overflow-x-hidden"
          >
            <div className="mx-4 md:mx-4 mb-4 md:mb-4">
              <p>{list && list?.result?.original_link}</p>
            </div>
            <div className="flex items-center gap-4 mx-4">
              <p className="text-Cyan w-full">
                {list && list?.result?.short_link}
              </p>
              <button
                onClick={() => {
                  copyToClipboardHandler(list?.result?.short_link)
                }}
                className={`px-8 py-2 rounded-lg text-white hover:opacity-50 ${
                  copiedText ? "bg-veryDarkViolet" : "bg-Cyan"
                }`}
              >
                {text}
              </button>
            </div>
          </div>
        ))}
    </section>
  )
}

export default UrlShortner
