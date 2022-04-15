import { useState, useEffect } from "react"

export const useMedia = mediaQueryString => {
  const [queryMatch, setQueryMatch] = useState()

  useEffect(() => {
    const setMediaMatchHandler = e => setQueryMatch(e.matches)

    const mediaQueryList = window.matchMedia(mediaQueryString)

    setMediaMatchHandler(mediaQueryList)
    mediaQueryList.addListener(setMediaMatchHandler)

    return () => mediaQueryList.removeListener(setMediaMatchHandler)
  }, [mediaQueryString])

  return queryMatch
}

export const getMdMedia = () => "screen and (min-width: 768px)"
