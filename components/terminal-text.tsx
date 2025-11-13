"use client"

import { useEffect, useState } from "react"

interface TerminalTextProps {
  text: string
  speed?: number
}

export default function TerminalText({ text, speed = 50 }: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <div className="font-mono text-lg md:text-2xl text-cyan-400 tracking-wider">
      <span>{displayedText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}
