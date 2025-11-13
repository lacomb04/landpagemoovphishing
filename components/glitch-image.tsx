"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./glitch.module.css"

interface GlitchImageProps {
  src: string
  alt: string
  className?: string
}

export default function GlitchImage({ src, alt, className = "" }: GlitchImageProps) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const intervals = [
      setInterval(() => setGlitch(true), Math.random() * 2000 + 5000),
      setTimeout(() => setGlitch(false), 100),
    ]

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className} ${styles.glitchContainer}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover ${glitch ? styles.glitch : ""}`}
        priority
        unoptimized
      />
      <div className={`absolute inset-0 ${glitch ? styles.glitchEffect : ""}`} />
    </div>
  )
}
