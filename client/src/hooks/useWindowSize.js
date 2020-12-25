import React, { useState, useEffect } from "react"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize")
  }, [])

  return windowSize
}

export default useWindowSize
