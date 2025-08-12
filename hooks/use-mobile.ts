"use client"

import { useState, useEffect } from "react"

export const useMediaQuery = (query: string): boolean => {
  // Set initial state to false to avoid hydration mismatch
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)

      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      }

      // Use modern event listener pattern with fallback for older browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
      }
    }

    // Return empty cleanup function if not in browser
    return () => {}
  }, [query])

  return matches
}

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust the breakpoint as needed
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call on mount

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}

