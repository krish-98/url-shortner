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
    setTimeout(() => {
      setCopiedText(false)
      setText("Copy")
    }, 2000)
  }

  return (
    <section className="relative -top-20 px-4 md:px-8">
      <form
        onSubmit={URLShortner}
        className="w-full md:flex bg-DarkViolet p-12 max-w-7xl mx-auto rounded-lg"
      >
        <div className="w-full my-4 md:my-0 md:w-[80%]">
          <label>
            <input
              className={`w-full p-4 rounded-lg outline-none border-2 focus:border-Cyan ${
                !isValid
                  ? `border-Red placeholder:text-Red`
                  : `border-white placeholder:text-Gray`
              }`}
              type="text"
              placeholder="Shorten a link here..."
              value={value}
              onChange={inputHandler}
              onFocus={() => setIsValid(true)}
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
        lists?.reverse().map((list, index) => (
          <div
            key={index}
            className="bg-white mt-4 p-4 flex flex-col gap-2 justify-between items-center font-semibold rounded-lg truncate max-w-7xl m-auto"
          >
            <p className="w-full">{list && list?.result?.original_link}</p>
            <div className="w-full flex items-center gap-4 mx-4">
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
