import React, { useState } from "react"

const UrlShortner = () => {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [copiedText, setCopiedText] = useState(false)
  const [lists, setLists] = useState(
    localStorage.getItem("urlList")
      ? JSON.parse(localStorage.getItem("urlList"))
      : []
  )

  const reversed = [...lists].reverse()

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
          if (data?.ok) {
            // setData(data)
            setLists((previousData) => {
              localStorage.setItem(
                "urlList",
                JSON.stringify([...previousData, data])
              )
              return [...previousData, data]
            })
            setValue("")
          }
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

    setTimeout(() => {
      setCopiedText(false)
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

      {lists.length > 0 &&
        reversed?.map((list, index) => (
          <div
            key={index}
            className="bg-white mt-4 p-4 flex flex-col gap-3 items-center  font-semibold rounded-lg truncate max-w-3xl m-auto md:px-6 md:py-6"
          >
            <p className="w-full text-center overflow-hidden">
              {list && list?.result?.original_link}
            </p>
            <div className="w-full flex justify-center items-center gap-8">
              <p className="text-Cyan">{list && list?.result?.short_link}</p>
              <button
                onClick={() => {
                  copyToClipboardHandler(list?.result?.short_link)
                }}
                className={`px-8 py-2 rounded-lg text-white hover:opacity-50 ${
                  copiedText ? "bg-veryDarkViolet" : "bg-Cyan"
                }`}
              >
                {copiedText ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}
    </section>
  )
}

export default UrlShortner
